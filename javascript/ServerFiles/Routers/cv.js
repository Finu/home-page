var express = require('express');
var path = require('path');
var router = express.Router();

var skills = [{
    title: "Languages",
    perks: [
        "C#",
        "SQL",
        "JavaScript/TypeScript",
        "HTML",
        "CSS"
    ]
}, {
        title: "Frameworks",
        perks: [
            "ASP.NET MVC 5",
            "WPF",
            "Entity Framework",
            "WIX",
            "Bootstrap",
            "jQuery",
            "NUnit",
            "SpecFlow"
        ]
    }, {
        title: "Tools",
        perks: [
            "Visual Studio 2012",
            "Microsoft SQL Server Management",
            "Jenkins",
            "Unity3d",
            "Blender"
        ]
    }, {
        title: "Basics",
        perks: [
            "JAVA",
            "C++",
            "OpenGL",
            "Erlang"
        ]
    }, {
        title: "Learning stage",
        perks: [
            "AngularJS",
            "NodeJS",
            "Hadoop",
            "Hbase",
            "Mongodb",
            "Redis",
            "Pentaho DI",
            "Influxdb",
            "Grafana",
            "Elasticsearch",
            "Kibana",
            "Kafka",
            "Storm",
            "Java"
        ]
    }, {
        title: "Others",
        perks: [
            "CISCO",
            "Windows XP/7",
            "Linux (Ubuntu/CentOS)"
        ]
    }, {
        title: "Legacy stuff",
        perks: [
            "Delphi",
            "BMS (Building automation systems)",
            "Acces control systems",
            "CCTV (Closed Circuit TeleVision)",
            "Security systems"
        ]
    }];

router.get('/', function (req, res) {
    res.render(path.join(__dirname, '../../..', '/view/cv/index'), {
        skills: skills
    });
});

module.exports = router;