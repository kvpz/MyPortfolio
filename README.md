My Portfolio
### Development Environment(s)
I'm using [http-server] on Windows 10 using the default localhost:8000 domain for local testing. The web server however
runs Ubunutu 16.04 configured with Apache2 as the web server. Because not all servers function the same, I
am leveraging git to deal with the nuances. Therefore it is vital to adhere to the Git Management section below.


### Git Management
There are currently three branches: development, production and master. **Development** is taking place
on Windows using npm http-server so anything being placed in the development branch should work well with
that setup. The **Production** branch will contain a near final product which should be tested on the production
server under a different subdomain with the same setup as the main server. **Master** contains the working product which can be publicly
viewed at [portfolio.ideallyconnected.me].

#### Workflow (local Windows setup)


Created using AngularJS. Initialized with [angular-seed].


[angular-seed]:(https://github.com/angular/angular-seed)
[portfolio.ideallyconnected.me]:(https://portfolio.ideallyconnected.me)
[http-server]:(https://www.npmjs.com/package/http-server)