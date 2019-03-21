## DHT11-API
A very basic nodejs REST api to store data from a DHT11-Raspberry pi module using mongodb.
Basically send your data from your pi to a server and store it in a database.
Useful for remote-access to the data.


## Installation
* Install Node.js from here https://nodejs.org/en/
* Install npm from here https://www.npmjs.com/
* Clone or download this repo
* Run `npm install` in the root directory of this repo
* Add a `/config/` folder and create a `db.js` file in it
* Add this code to your `db.js` file:
```javascript
module.exports = {
    url : <username>:<password>@<your-database-ip>
}
```
* Run `npm start` in the root directory of this repo

## Usage
This API requires a specific data pattern in `x-www-form-urlencoded` form:
* `id`: the id of your pi. This is designed to support multiple pis. Just choose a unique one for each pi.
* `time`: a timestamp in the following format: `yyyy-MM-dd HH:mm:ss.ffffff` where y = year, M = month, d = day, H = hour, m = minute, s = second, f = fraction of second
* `temp`: your temperature measurement
* `hum`: your humidity measurement
Just send `POST` requests with your data to `<your-ip>:8000/entries`.

To `GET` your data back (in JSON format) send a request to `<your-ip>:8000/entries/<your-pi-id>`

## License
MIT. Do whatever you want.
