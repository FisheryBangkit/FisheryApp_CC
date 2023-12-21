# IWAKGO - Cloud Computing
Hello, this is backend IWAKGO application made by Capstone Team CH2-PS246

# Cloud Computing Team

|  Name | Bangkit ID | Contacts |
| ------------ | ------------ | ------------ |
| Ibnu Rizal Khusaini | C131BSY4072	 | [Github](https://github.com/ibnurizalkhusaini) & [Linkedin](www.linkedin.com/in/ibnu-rizal-khusaini-0b5b08276)  |
| Ade Chintya Alfiana Halalutu | C182BSX3246	| [Github](https://github.com/chintya3) & [Linkedin](https://www.linkedin.com/in/ade-chintya-alfiana-halalutu-663534284/) |



## IwakGo Backend Flow

![App Screenshot](https://storage.googleapis.com/gambar-kolam/doc-cc/alur%20CC-min.png)


# Endpoint


## Marketplace

#### Create New Post

```http
  POST /marketplace/addPost
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `userProfilePhoto` | `string` | **Required** |
| `title` | `string` | **Required** |
| `description` | `string` | **Required** |
| `location` | `string` | **Required** |
| `phoneNumber` | `string` | **Required** |
| `price` | `int` | **Required** |
| `photo` | `image/file` | **Required** |

#### GET All Post

```http
  GET /marketplace/allPosts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `-`      | `-` | **Retrieve all DATA on database posts** |

#### GET Post By ID

```http
  GET /marketplace/posts/:idPost
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `-`      | `-` | **Retrieve DATA posts by ID** |


#### Create New Comment on post

```http
  POST /:idPost/addComment
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `comment` | `string` | **Required** |
| `photoProfile` | `string` | **Required** |

#### GET Comment from POST

```http
  GET /comment/:idPost/getComment
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `-`      | `-` | **Retrieve Comment from Post** |

#### GET Search posts from POST

```http
  GET /marketplace/search
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Retrieve the searched posts from Post** |



## Home

#### GET Fish Menu Home

```http
  GET /home/ikan
```

#### GET Specified Fish Menu

```http
  GET /home/ikan/:nama
```

#### GET Cultivation Specified Fish

```http
  GET /home/ikan/:nama/cara-budidaya
```

#### GET Pool Selection for Specified Fish

```http
  GET /home/ikan/:nama/cara-budidaya/pemilihan-kolam
```

#### GET Seed Selection for Specified Fish

```http
  GET /home/ikan/:nama/cara-budidaya/pemilihan-benih
```

#### GET Maintenance for Specified Fish

```http
  GET /home/ikan/:nama/cara-budidaya/pemeliharaan
```

#### GET Harvest for Specified Fish

```http
  GET /home/ikan/:nama/cara-budidaya/panen
```

#### GET Food Recommendation for Specified Fish

```http
  GET /home/ikan/:nama/rekomendasiPakan
```

#### GET Desease for Specified Fish

```http
  GET /home/ikan/:nama/penyakit
```

#### Post Image for Scan

```http
  POST /home/scan/uploadImage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `image` | `image/file` | **Required** |
