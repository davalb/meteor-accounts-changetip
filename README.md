## meteor-changetip

changetip for meteor


-----


### installation
add the changetip package with [meteorite](https://github.com/oortcloud/meteorite/) using the following command:

    $ meteor add davalb:accounts-changetip


-----


### api

When you register your API at changetip, make sure to enter your redirect uri like this: https://your-domain.com/_oauth/changetip

if you configured your client id and client secret using either the accounts-ui package or manually (http://docs.meteor.com/#meteor_loginwithexternalservice) the `sc.initialize` call will automatically be made. the soundcloud object exposes the `ready()` reactive variable in order to track the sdk initialization state.


-----


### credits
* [@mataspetrikas](https://github.com/mataspetrikas) for the original soundcloud accounts port
* [@unvael](https://github.com/unvael) for updates to the original soundcloud accounts port
