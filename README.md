# FisheryApp - Cloud Computing
Hello, this is backend Fishery application made by Capstone Team CH2-PS246

# Cloud Computing Team

|  Name | Bangkit ID | Contacts |
| ------------ | ------------ | ------------ |
| Ibnu Rizal Khusaini | C131BSY4072	 | [Github](https://github.com/ibnurizalkhusaini) & [Linkedin](www.linkedin.com/in/ibnu-rizal-khusaini-0b5b08276)  |
| Ade Chintya Alfiana Halalutu | C182BSX3246	| [Github](https://github.com/chintya3) & [Linkedin](https://www.linkedin.com/in/ade-chintya-alfiana-halalutu-663534284/) |


# Endpoint

|  Endpoint | Method | Body Request (JSON) | Description |
| ------------ | ------------ | ------------ | ------------ |
| /api/marketplace/add-post | POST	 | username, userProfilePhoto, title, description, location, phoneNumber, price, photo  | POST request for add post on marketplace |
| /api/marketplace/posts/:post_id/add-comment | POST	| username, comment | POST request for add comment on post |
| /api/marketplace/posts | GET	| - | GET request to retrieve all post |
| /api/home/ikan | GET	| - | GET request to retrieve menu of types fish |
| /api/home/ikan/:nama | GET	| - | GET request to retrieve menu from specified fish |
| /api/home/ikan/:nama/cara-budidaya | GET	| - | GET request to retrieve submenu from specified fish |
| /api/home/ikan/:nama/cara-budidaya/pemilihan-kolam | GET	| - | GET request to retrieve selection pool for specified fish |
| /api/home/ikan/:nama/cara-budidaya/pemilihan-benih | GET	| - | GET request to retrieve selection seed for specified fish |
| /api/home/ikan/:nama/cara-budidaya/pemeliharaan | GET	| - | GET request to retrieve maintenance for specified fish |
| /api/home/ikan/:nama/cara-budidaya/panen | GET	| - | GET request to retrieve harvest for specified fish |
| /api/home/ikan/:nama/rekomendasi-pakan | GET	| - | GET request to retrieve recommendation food for specified fish |
| /api/home/ikan/:nama/penyakit | GET	| - | GET request to retrieve desease from specified fish |
| /api/home/upload-image | POST	| - | POST request to upload fish photo |

