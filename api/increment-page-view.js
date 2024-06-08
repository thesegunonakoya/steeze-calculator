let pageViewCount = 0;

module.exports = (req, res) => {
    pageViewCount++;

    res.status(200).json({ pageViewCount });
};
