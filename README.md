# FisheryApp - Cloud Computing
Hello, this is backend Fishery application made by Capstone Team CH2-PS246

# Cloud Computing Team

|  Name | Bangkit ID | Contacts |
| ------------ | ------------ | ------------ |
| Ibnu Rizal Khusaini | C131BSY4072	 | [Github]() & [Linkedin]()  |
| Ade Chintya Alfiana Halalutu | C182BSX3246	| [Github]() & [Linkedin]() |


# Endpoint

|  Endpoint | Method | Body Request (JSON) | Description |
| ------------ | ------------ | ------------ | ------------ |
| /api/marketplace/add-post | POST	 | username, userProfilePhoto, title, description, location, phoneNumber, price, photo  | POST request for add post on marketplace |
| /api/marketplace/posts/:post_id/add-comment | POST	| username, comment | POST request for add comment on post |
| /api/marketplace/posts | GET	| - | GET request to retrieve all post |
| /api/home/fish-cultivation-nila | GET	| - | GET request to retrieve fish cultivation Nila |
| /api/home/fish-cultivation-mujaer | GET	| - | GET request to retrieve fish cultivation Mujaer |
| /api/home/fish-cultivation-nila/cara-budi-daya | GET	| - | GET request to retrieve cultivation of fish Nila |
| /api/home/fish-cultivation-nila/rekomendasi-pakan | GET	| - | GET request to retrieve food recommendation of fish Nila |
| /api/home/fish-cultivation-nila/penyakit | GET	| - | GET request to retrieve desease of fish Nila |
| /api/home/fish-cultivation-mujaer/cara-budi-daya | GET	| - | GET request to retrieve cultivation of fish Mujaer |
| /api/home/fish-cultivation-mujaer/rekomendasi-pakan | GET	| - | GET request to retrieve food recommendation of fish Mujaer |
| /api/home/fish-cultivation-mujaer/penyakit | GET	| - | GET request to retrieve desease of fish Mujaer |
