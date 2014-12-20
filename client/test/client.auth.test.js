angular.module('authMock', [])
  .provider('Auth', function() {
    this.userLoggedIn = false;
    this.$get = function() {
      return {
        signin: function() {
          this.userLoggedIn = true;
        },
        signout: function() {
          this.userLoggedIn = false;
        },
        isAuth: function() {
          return this.userLoggedIn;
        }
      };
    };
  });


describe('Unit: AuthController', function() {
  // Load Controller Module
  beforeEach(module('ekg.auth'));
  // Load the Mock Service Module
  beforeEach(module('authMock'));

  var AuthController, Auth;

  beforeEach(inject(function($controller, _Auth_) {
    Auth = _Auth_;
    AuthController = $controller('AuthController', {
      Auth: Auth
    });
  }));

});