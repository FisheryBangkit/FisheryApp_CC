# FisheryApp - Cloud Computing
Hello, this is backend Fishery application made by Capstone Team CH2-PS246

# Table of Contents
- [Introduction]
- [CC Team]
- [Endpoints]

# Cloud Computing Team

|  Name | Bangkit ID | Contacts |
| ------------ | ------------ | ------------ |
| Ibnu Rizal Khusaini | Ca3aBSY4072	 | [Github]() & [Linkedin]()  |
| Ade Chintya Alfiana Halalutu | C182BSX3246	| [Github]() & [Linkedin]() |


# Endpoint

|  Endpoint | Method | Body Request (JSON) | Description |
| ------------ | ------------ | ------------ | ------------ |
| /api/marketplace/add-post | POST	 | username, userProfilePhoto, title, description, location, phoneNumber, price, photo  | POST request for add post on marketplace |
| /api/marketplace/posts/:post_id/add-comment | POST	| username, comment | POST request for add comment on post |
| /api/marketplace/posts | GET	| - | GET request to retrieve all post |
