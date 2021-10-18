import uuid


id = (hex(uuid.getnode()))
lisans_base_url = GOOGLE_SCRPIT_URL
lisans_deger = requests.get(lisans_base_url+id).json()

if lisans_deger != True:
    sys.exit()
