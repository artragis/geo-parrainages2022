from pathlib import Path
from csv import DictReader
from collections import Counter
from json import dumps

def extract_mayor_file(file_path: Path):
    departments = []
    with file_path.open() as f:
        reader = DictReader(f, [
            "code_commune_INSEE", "nom_commune_postal",
            "code_postal", "libelle_acheminement", "ligne_5",
            "latitude", "longitude", "code_commune",
            "article", "nom_commune", "nom_commune_complet", "code_departement", "nom_departement", "code_region",
            "nom_region"
        ])
        for line in reader:
            departments.append(line["nom_departement"])
    return Counter(departments)


if __name__ == "__main__":
    result = extract_mayor_file(Path(__file__).parent / 'raw_data' / 'communes-departement-region.csv')
    with (Path(__file__).parent.parent / 'maires.json').open('w') as f:
        f.write(dumps(result, indent=4))
