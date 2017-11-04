# hack4good_ipourlife
ipourlife hackathon

# Pre-requisites
* Client
  * Android Studio / XCode
  * NodeJS
  * ionic & cordova
    * `npm install -g ionic cordova`
* Server
  * Python 3.6.1
  * virtualenv (`pip install virtualenv`)
  * Django (`pip install Django`)
  * heroku CLI (https://devcenter.heroku.com/articles/heroku-cli)
  * setup virtual env (first time only)
    * `virtualenv venv`
    * `./venv/Scripts/activate`
    * `pip install -r requirements.txt`
  * setup Django db / users (first time only)
    * `python manage.py migrate`
    * `python manage.py createsuperuser`
    
## running client (web)
* `cd client`
* `ionic serve`

## deploying to device
* `cd client`
* `ionic cordova run android --device`

## running server (locally)
* `./venv/Scripts/activate` (. venv/bin/activate)
* `python manage.py runserver`
* Navigate to local server http://localhost:8000
* For admin, navigate to http://localhost:8000/admin (and login with superuser)
