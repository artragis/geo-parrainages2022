const deptToCodeMap = {
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
    "Guyane": "FR-GF",
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
    "Nouvelle-Calédonie": "DOM-TOM",
    "Saint-Barthélemy": "DOM-TOM",
    "Saint-Martin / Saint-Barthélémy" : "DOM-TOM",
    "Saint-Pierre-et-Miquelon": "DOM-TOM",
    "Wallis et Futuna": "DOM-TOM"
}
const codeToDeptMap = {}
Object.keys(deptToCodeMap).forEach(dept => codeToDeptMap[deptToCodeMap[dept]]= dept)
const alignment = {
    "ARTHAUD Nathalie": "rgba(255, 0, 0)",
    "HIDALGO Anne": "rgba(230, 33, 84, 0.8)",
    "TAUBIRA Christiane": "rgb(230, 33, 84)",
    "MÉLENCHON Jean-Luc": "rgba(255, 0, 0)",
    "ROUSSEL Fabien": "rgba(255, 0, 0)",
    "POUTOU Philippe": "rgba(255, 0, 0)",
    "JADOT Yannick": "rgb(0, 192, 0)",
    "MACRON Emmanuel": "#2abaff",
    "MIGUET Nicolas": "rgba(0, 0, 200)",
    "ZEMMOUR Éric": "rgba(0, 0, 200)",
    "BARNIER Michel": "rgba(0, 0, 200)",
    "PÉCRESSE Valérie": "rgba(0, 0, 200)",
    "LE PEN Marine": "rgba(0, 0, 200)",
    "LASSALLE Jean": "rgba(0, 0, 200)",
    "DUPONT-AIGNAN Nicolas": "rgba(0, 0, 200)",
    "ASSELINEAU François": "rgba(0, 0, 200)",
}

const nonCandidates = [
    "BARNIER Michel",
    "HOLLANDE François",
    "MEURICE Guillaume",
    "SCHOVANEC Josef",
    "MARECHAL Philippe Célestin",
    "MÉNARD Emmanuelle",
    "COJAN Patrick",
    "FESSARD DE FOUCAULT Bertrand",
    "MACRON Emmanuel",
    "PHILIPPOT Florian",
]
function sortCandidate(perCandidate, candidates) {
    const perParrainageSort = (a, b) => {
        if (perCandidate[a].total < perCandidate[b].total) {
            return 1;
        }
        if (perCandidate[a].total > perCandidate[b].total) {
            return -1;
        }
        return 0
    }
    if (document.getElementById("order").value === "nb") {
        return candidates.sort(perParrainageSort)
    }
    return candidates.sort()
}

function reorderCandidates(perCandidates) {
    const newOrder = sortCandidate(perCandidates,Object.keys(perCandidates))
    const $results = $("#results")
    newOrder.forEach(candidate => $(".result[data-name='" + candidate+"']").appendTo($results))
}
$(async function () {

    const result = await fetch("data2.json").then(r => r.json())
    const perCandidate = {}
    const $results = $("#results")

    let updateDate = null

    // Aggregates signatures per candidate
    result.forEach(n => {
        if (!(perCandidate[n.Candidat])) {
            perCandidate[n.Candidat] = {data: {}, dataMayor: {}, total: 0}
            Object.values(deptToCodeMap).forEach(v => perCandidate[n.Candidat].data[v] = 0)
            Object.values(deptToCodeMap).forEach(v => perCandidate[n.Candidat].dataMayor[v] = 0)
        }

        perCandidate[n.Candidat].total++
        perCandidate[n.Candidat].data[deptToCodeMap[n.Departement]]++
        if (n.Mandat === "Maire") {
            perCandidate[n.Candidat].dataMayor[deptToCodeMap[n.Departement]]++
        }
        if (!deptToCodeMap[n.Departement]) {
            console.log(n.Departement)
        }

        const date = new Date(n.DatePublication)
        if (updateDate === null || date > updateDate) {
            updateDate = date
        }
    })


    // Computes geographical repartition of signatures
    Object.keys(perCandidate).forEach(c => {
        perCandidate[c].total_departments = Object.keys(perCandidate[c].data).filter(dept => perCandidate[c].data[dept] > 0).length
        perCandidate[c].valid_repartition = Object.keys(perCandidate[c].data).map(dept => Math.min(perCandidate[c].data[dept], 50)).reduce((a, b) => a + b, 0) > 500
    })

    // Displays the freshness of the data
    const formatter = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full' })
    document.getElementById("update-date").innerText = `${result.length} parrainages déposés au ${formatter.format(updateDate)}.`

    /**
     * Initializes the map on the given element. The element must exist and possess
     * a data-candidate attribute with the candidate name.
     * @param mapElem
     */
    function initMap(mapElem) {
        const candidateName = mapElem.attr("data-candidate");
        mapElem.vectorMap({
            map: 'fr_merc',
            backgroundColor: 'var(--blue)',
            series: {
                regions: [{
                    values: perCandidate[candidateName].data,
                    scale: ['#FFFFFF', '#0071A4'],
                    min: 0,
                    max: 90,
                    normalizeFunction: 'polynomial',

                    legend: {
                        vertical: true
                    },
                }]
            },

            onRegionTipShow: function (e, el, code) {
                const parrainages = perCandidate[candidateName].data[code]
                const nbMayorForCandidate = perCandidate[candidateName].dataMayor[code]
                const nbMayorTotal = mayors[codeToDeptMap[code]]
                el.html(`
                    ${mapElem.vectorMap("get", "mapObject").regions[code].config.name}<br />
                    <small>${parrainages} parrainage${parrainages > 1 ? 's' : ''}</small>
                    (${nbMayorForCandidate} / ${nbMayorTotal} maires)
                `);
            }
        })
    }

    $results.text('') // empties the loading message


    $("#order").change(() => reorderCandidates(perCandidate))
    sortCandidate(perCandidate,Object.keys(perCandidate)).forEach(c => {
        const candidate = $("<div>")
            .addClass("result")
            .attr("data-name", c)
            .attr("data-valid", perCandidate[c].total >= 500)
            .attr("data-declared", !nonCandidates.includes(c))
            .attr("data-valid-depts", perCandidate[c].total_departments > 30)
            .attr("data-valid-repartition", perCandidate[c].valid_repartition)

        $results.append(candidate)

        if (alignment[c]) {
            candidate.attr("style", "--alignment-color: " + alignment[c])
        }

        const header = $("<header>")
            .append($("<h2>").text(c))
            .append(
                $("<p>")
                    .text(perCandidate[c].total + " parrainage" + (perCandidate[c].total > 1 ? "s" : ""))
                    .addClass("parrainages")
            )
            .append(
                $("<p>")
                    .text(`dans ${perCandidate[c].total_departments} département${perCandidate[c].total_departments > 1 ? "s" : ""}`)
                    .addClass("departments")
            )
        candidate.append(header)

        const child = $("<article>")
            .attr("data-candidate", c)
            .addClass("map")
        candidate.append(child)

        initMap(child)

        const $footer = $("<footer>")
        candidate.append($footer)

        const $ul = $("<ul>");
        $footer.append($ul)

        $ul.append($("<li>").append($("<strong>").text(perCandidate[c].data["ET"])).append($("<span>").text("Représentant(e)s des français de l'étranger")))
        $ul.append($("<li>").append($("<strong>").text(perCandidate[c].data["DOM-TOM"])).append($("<span>").text("Parlementaires et maires des DOM-TOM")))
        $ul.append($("<li>").append($("<strong>").text(perCandidate[c].data["EU"])).append($("<span>").text("Parlementaires européens")))
    })

    /* Filters */

    const searchElem = document.getElementById("filter:search")
    const filter500Elem = document.getElementById("filter:500")
    const filter30Elem = document.getElementById("filter:30")
    const filterRepartitionElem = document.getElementById("filter:repartition")
    const filterDeclaredElem = document.getElementById("filter:declared-candidates")
    const noResultsElem = document.querySelector("section.no-results")

    function normalizeString(str) {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    /**
     * Reads the current filters and applies them.
     */
    function filterCandidates() {
        const search = normalizeString(searchElem.value)
        const filter500 = filter500Elem.checked
        const filter30 = filter30Elem.checked
        const filterRepartition = filterRepartitionElem.checked
        const filterDeclared = filterDeclaredElem.checked

        let hasVisibles = false

        document.querySelectorAll("#results .result").forEach(elem => {
            let visible = true
            if (search && normalizeString(elem.getAttribute("data-name")).indexOf(search) === -1) {
                visible = false
            }

            if (filter500 && elem.getAttribute("data-valid") !== "true") {
                visible = false
            }

            if (filter30 && elem.getAttribute("data-valid-depts") !== "true") {
                visible = false
            }

            if (filterRepartition && elem.getAttribute("data-valid-repartition") !== "true") {
                visible = false
            }

            if (filterDeclared && elem.getAttribute("data-declared") === "false") {
                visible = false
            }

            elem.classList.toggle("invisible", !visible)
            hasVisibles |= visible
        })

        noResultsElem.classList.toggle("is-active", !hasVisibles)
        noResultsElem.setAttribute("aria-hidden", !!hasVisibles)
    }

    $("aside.controls input[type='checkbox']").on('click', filterCandidates)
    $("aside.controls input[type='search']").on('input', filterCandidates)

    filterCandidates()

});
