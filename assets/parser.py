import json


parsed_json_path = "./Siege-Rando-Images/parsed.json"
def start_parsing():
    with open(parsed_json_path, "r") as json_file:
        parsed_dict = json.load(json_file)
        json_file.close()
        parse(parsed_dict)

def parse(data: dict):
    for key in data:
        value = data[key]

start_parsing()