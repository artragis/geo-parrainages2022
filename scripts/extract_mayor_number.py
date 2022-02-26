from pathlib import Path
from csv import DictReader
from collections import Counter
from json import dumps

def extract_mayor_file(file_path: Path):
    departments = []
    city = set()
    with file_path.open() as f:
        reader = DictReader(f)
        for line in reader:
            if (line['nom_departement'], line['nom_commune_complet']) in city:
                continue
            city.add((line['nom_departement'], line['nom_commune_complet']))
            departments.append(line["nom_departement"])
    return Counter(departments)


if __name__ == "__main__":
    result = extract_mayor_file(Path(__file__).parent / 'raw_data' / 'communes-departement-region.csv')
    with (Path(__file__).parent.parent / 'maires.json').open('w') as f:
        f.write(dumps(result, indent=4))
