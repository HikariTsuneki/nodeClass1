var express = require('express');
var router = express.Router();

var manga = [
    {
        title: 'Demon Slayer: Kimetsu No Yaiba.',
        description: 'In Taisho-era Japan, Tanjiro Kamado is a kindhearted boy who makes a living selling charcoal. But his peaceful life is shattered when a demon slaughters his entire family. His little sister Nezuko is the only survivor, but she has been transformed into a demon herself! Tanjiro sets out on a dangerous journey to find a way to return his sister to normal and destroy the demon who ruined his life.'
    },
    {
        title: 'Jujutsu Kaisen',
        description: 'Yuji Itadori es un genio en el atletismo. Pero no tiene ningún interés de correr en círculos, está contento como una almeja en el Club de Investigación Oculta. Aunque solo está en el club por diversión, ¡las cosas se ponen serias cuando aparece un verdadero espíritu en la escuela!'
    },
    {
        title: 'Spy x Family',
        description: 'Spy x Family narra las aventuras del espía Twilight  quien trabaja para el servicio de inteligencia WISE de la ficticia república de Westalis y cuyo deber es mantener la paz entre dicho país y su hostil vecino Ostania, un país enemigo en el cual se infiltra con la misión de interceptar a Dónovan Desmond, una poderosa figura de Ostania que representa la mayor amenaza para la paz entre ambos países.'
    }
]

/* GET books listing. */
router.get('/', function(req, res, next) {
  res.send(manga);
});

module.exports = router;