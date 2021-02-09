import requests

pokemon_fetch_url = "https://db.pokemongohub.net/api/pokemon/with-generation/{}"
SHADOW_URL = "https://db.pokemongohub.net/static/media/shadow-background.ff409693.png"
photo_url = "https://db.pokemongohub.net/images/official/full/{}.png"

def get_form_suffix(form):
    if not form:
        return ''

    if form == 'Galarian':
        return '_galar'

    if form == 'Alola':
        return '_f2'

def convert_id_to_fname(id):
    if 'galar' in id:
        return id.replace('_galar', '_galarian')
    if '_f2' in id:
        return id.replace('_f2', '_alola')

def save_image(id, content):
    file_name = "{}.png".format(convert_id_to_fname(id))

    file = open(file_name, "wb")
    file.write(content)
    file.close()

def download_image(id, form=None):
    padded_id = pad_with_zeroes(id)

    padded_id += get_form_suffix(form)

    url = photo_url.format(padded_id)
    response = requests.get(url)
    save_image(padded_id, response.content)


def pad_with_zeroes(id):
    result = str(id)
    while len(result) < 3:
        result = "0" + result

    return result


# for i in range(1,9):
#     response = requests.request("GET", pokemon_fetch_url.format(i))
#
#     for pokemon in response.json():
#         if pokemon['form'] in ['Alola', 'Galarian']:
#             print(pokemon['name'])
#             print("downloading {} {}".format(pokemon['name'], pokemon['form']))
#             download_image(pokemon['id'], pokemon['form'])



response = requests.get(SHADOW_URL)
file_name = "shadow.png"

file = open(file_name, "wb")
file.write(response.content)
file.close()
