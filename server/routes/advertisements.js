const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Advertisement = require('../Models/Advertisement');

// Create an advertisement
router.post('/', auth, async (req, res) => {
    const { title, description, category } = req.body;
    try {
        const newAd = new Advertisement({
            title,
            description,
            category,
            user: req.user.id
        });
        const ad = await newAd.save();
        res.json(ad);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all advertisements
router.get('/', async (req, res) => {
    try {
        const ads = await Advertisement.find().populate('user', 'name email');
        res.json(ads);
    } catch (err) {
        res.status(500).send('Server error');
    }
});


// Get advertisements by category
router.get('/:category', async (req, res) => {
    try {
        const ads = await Advertisement.find({ category: req.params.category }).populate('user', 'name email');
        res.json(ads);
    } catch (err) {
        res.status(500).send('Server error');
    }
});


router.put('/:id', auth, async (req, res) => {
    try {
        let ad = await Advertisement.findById(req.params.id);

        if (!ad) return res.status(404).json({ msg: 'Advertisement not found' });

        if (ad.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        ad = await Advertisement.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(ad);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete an advertisement
router.delete('/:id', auth, async (req, res) => {
    try {
        const ad = await Advertisement.findById(req.params.id);

        if (!ad) return res.status(404).json({ msg: 'Advertisement not found' });

        if (ad.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await Advertisement.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Advertisement removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;
