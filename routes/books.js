var express = require('express');
var router = express.Router();

var books = [
    {
        title: 'Six Crimson Cranes',
        description: 'Shiori, the only princess of Kiata, has a secret. Forbidden magic runs through her veins. Normally she conceals it well, but on the morning of her betrothal ceremony, Shiori loses control. At first, her mistake seems like a stroke of luck, forestalling the wedding she never wanted, but it also catches the attention of Raikama, her stepmother.'
    },
    {
        title: 'Daughter of the Moon Goddess',
        description: 'Growing up on the moon, Xingyin is accustomed to solitude, unaware that she is being hidden from the feared Celestial Emperor who exiled her mother for stealing his elixir of immortality. But when Xingyins magic flares and her existence is discovered, she is forced to flee her home, leaving her mother behind.'
    },
    {
        title: 'Reflection - Elizabeth Lim',
        description: 'When Captain Shang is mortally wounded by Shan Yu in battle, Mulan must travel to the Underworld, Diyu, in order to save him from certain death. But King Yama, the ruler of Diyu, is not willing to give Shang up easily.'
    }
]

/* GET books listing. */
router.get('/', function(req, res, next) {
  res.send(books);
});

module.exports = router;
