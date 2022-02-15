const reverseMap = {
    "Eure-et-Loir": "FR-28",
    "Finistère": "FR-29",
    "Côtes-d'Armor": "FR-22",
    "Creuse": "FR-23",
    "Côte-d'Or": "FR-21",
    "Drôme": "FR-26",
    "Eure": "FR-27",
    "Dordogne": "FR-24",
    "Doubs": "FR-25",
    "Martinique": "FR-MQ",
    "Val-de-Marne": "FR-94",
    "Seine-Saint-Denis": "FR-93",
    "Hauts-de-Seine": "FR-92",
    "Essonne": "FR-91",
    "Territoire de Belfort": "FR-90",
    "Charente-Maritime": "FR-17",
    "Charente": "FR-16",
    "Cantal": "FR-15",
    "Calvados": "FR-14",
    "Bouches-du-Rhône": "FR-13",
    "Aveyron": "FR-12",
    "Aude": "FR-11",
    "Aube": "FR-10",
    "Haute-Corse": "FR-2B",
    "Corse-du-Sud": "FR-2A",
    "Corrèze": "FR-19",
    "Cher": "FR-18",
    "Vosges": "FR-88",
    "Yonne": "FR-89",
    "Somme": "FR-80",
    "Tarn": "FR-81",
    "Tarn-et-Garonne": "FR-82",
    "Var": "FR-83",
    "Vaucluse": "FR-84",
    "Vendée": "FR-85",
    "Vienne": "FR-86",
    "Haute-Vienne": "FR-87",
    "Ain": "FR-01",
    "Aisne": "FR-02",
    "Allier": "FR-03",
    "Alpes-de-Haute-Provence": "FR-04",
    "Hautes-Alpes": "FR-05",
    "Alpes-Maritimes": "FR-06",
    "Ardèche": "FR-07",
    "Ardennes": "FR-08",
    "Ariège": "FR-09",
    "La Réunion": "FR-RE",
    "Paris": "FR-75",
    "Haute-Savoie": "FR-74",
    "Seine-et-Marne": "FR-77",
    "Seine-Maritime": "FR-76",
    "Saône-et-Loire": "FR-71",
    "Haute-Saône": "FR-70",
    "Savoie": "FR-73",
    "Sarthe": "FR-72",
    "Deux-Sèvres": "FR-79",
    "Yvelines": "FR-78",
    "Mayotte": "FR-YT",
    "Pyrénées-Orientales": "FR-66",
    "Bas-Rhin": "FR-67",
    "Pyrénées-Atlantiques": "FR-64",
    "Hautes-Pyrénées": "FR-65",
    "Pas-de-Calais": "FR-62",
    "Puy-de-Dôme": "FR-63",
    "Oise": "FR-60",
    "Orne": "FR-61",
    "Haut-Rhin": "FR-68",
    "Rhône": "FR-69",
    "Mayenne": "FR-53",
    "Haute-Marne": "FR-52",
    "Marne": "FR-51",
    "Manche": "FR-50",
    "Moselle": "FR-57",
    "Morbihan": "FR-56",
    "Meuse": "FR-55",
    "Meurthe-et-Moselle": "FR-54",
    "Nord": "FR-59",
    "Nièvre": "FR-58",
    "Lozère": "FR-48",
    "Maine-et-Loire": "FR-49",
    "Loire-Atlantique": "FR-44",
    "Loiret": "FR-45",
    "Lot": "FR-46",
    "Lot-et-Garonne": "FR-47",
    "Landes": "FR-40",
    "Loir-et-Cher": "FR-41",
    "Loire": "FR-42",
    "Haute-Loire": "FR-43",
    "Val-d'Oise": "FR-95",
    "Guyane française": "FR-GF",
    "Guadeloupe": "FR-GP",
    "Jura": "FR-39",
    "Isère": "FR-38",
    "Haute-Garonne": "FR-31",
    "Gard": "FR-30",
    "Gironde": "FR-33",
    "Gers": "FR-32",
    "Ille-et-Vilaine": "FR-35",
    "Hérault": "FR-34",
    "Indre-et-Loire": "FR-37",
    "Indre": "FR-36",
    "Parlement européen": "EU",
    "Français de l'étranger": "ET",
    "Saint-Martin": "DOM-TOM",
    "Polynésie française": "DOM-TOM",
}
const alignment = {
    "ARTHAUD Nathalie": "rgba(255, 0, 0, 0.5)",
    "HIDALGO Anne": "rgba(230, 33, 84, 0.8)",
    "TAUBIRA Christiane": "rgb(230, 33, 84)",
    "MÉLENCHON Jean-Luc": "rgba(255, 0, 0, 0.5)",
    "ROUSSEL Fabien": "rgba(255, 0, 0, 0.5)",
    "POUTOU Philippe": "rgba(255, 0, 0, 0.5)",
    "JADOT Yannick": "rgba(0, 255, 0, 0.5)",
    "MACRON Emmanuel": "#2abaff",
    "MIGUET Nicolas": "rgba(0, 0, 200, 0.5)",
    "ZEMMOUR Éric": "rgba(0, 0, 200, 0.5)",
    "BARNIER Michel": "rgba(0, 0, 200, 0.5)",
    "PÉCRESSE Valérie": "rgba(0, 0, 200, 0.5)",
    "LE PEN Marine": "rgba(0, 0, 200, 0.5)",
    "LASSALLE Jean": "rgba(0, 0, 200, 0.5)",
    "DUPONT-AIGNAN Nicolas": "rgba(0, 0, 200, 0.5)",
    "ASSELINEAU François": "rgba(0, 0, 200, 0.5)",


}
$(async function () {
    const r = await fetch("data2.json")
    const result = await r.json()
    const perCandidate = {}
    result.forEach(n => {
        if (!(perCandidate[n.Candidat])) {
            perCandidate[n.Candidat] = {data: {}, total: 0}
            Object.values(reverseMap).forEach(v => perCandidate[n.Candidat].data[v] = 0)
        }
        if (!reverseMap[n.Departement]) {
            console.log(n.Departement)
        }
        perCandidate[n.Candidat].total++;
        perCandidate[n.Candidat].data[reverseMap[n.Departement]]++

    })
    Object.keys(perCandidate).forEach(c => {
        const candidate = $("<div>").addClass("result")

        $("#results").append(candidate)
        if (perCandidate[c].total >= 500) {
            candidate.addClass("ok")
        } else {
            candidate.addClass("nok")
        }
        const header = $("<header>").append($("<h1>").text(c)).append($("<p>").text(perCandidate[c].total +
            " parrainages"));
        if (alignment[c]) {
            header.attr("style", "background-color:" + alignment[c])
        }
        candidate.append(header)
        let $ul = $("<ul>");
        header.append($ul)
        $ul.append($("<li>").text("Français de l'étranger: " + perCandidate[c].data["ET"]))
        $ul.append($("<li>").text("Parlement Européen: " + perCandidate[c].data["EU"]))
        $ul.append($("<li>").text("Autres DOM: " + perCandidate[c].data["DOM-TOM"]))
        const child = $("<article>").attr("id", c)
        child.addClass("map")
        candidate.append(child)
        child.vectorMap({
            map: 'fr_merc',
            series: {
                regions: [{
                    values: perCandidate[c].data,
                    scale: ['#FFFFFF', '#0071A4'],
                    normalizeFunction: 'polynomial',

                    legend: {
                        horizontal: true
                    },
                    onRegionTipShow: function (e, el, code) {
                        el.html(code);
                    }
                }]
            }
        })
    })
    $("#filter").on('click', e => {
        if ($(e.target).is(":checked")) {
            $(".nok").addClass("invisible")
        } else {
            $(".nok").removeClass("invisible")
            $(".nok").each(n => {
                n.vectorMap({
                    map: 'fr_merc',
                    series: {
                        regions: [{
                            values: perCandidate[n.attr("id")].data,
                            scale: ['#FFFFFF', '#0071A4'],
                            normalizeFunction: 'polynomial',
                            legend: {
                                horizontal: true
                            },
                            onRegionTipShow: function (e, el, code) {
                                el.html(code);
                            }
                        }]
                    },

                })
            })
        }
    })
});
