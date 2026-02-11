const express = require('express');
const app = express();
app.use(express.json());

app.post('/analyze/palindrome', (req, res) => {
    const str = req.body.text; const rev = str.split('').reverse().join(''); res.json({ isPalindrome: str === rev });
});

app.post('/analyze/anagram', (req, res) => {
    const { s1, s2 } = req.body; res.json({ isAnagram: s1.split('').sort().join('') === s2.split('').sort().join('') });
});

app.post('/analyze/vowels', (req, res) => {
    const count = (req.body.text.match(/[aeiou]/gi) || []).length; res.json({ vowels: count });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
