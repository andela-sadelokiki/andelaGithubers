describe('Githubers App', function() {
  var githuberScope, gitCtrl;
  beforeEach(module('Githuber'));

  beforeEach(inject(function($rootScope, $controller) {
    githuberScope = $rootScope.$new();
    gitCtrl = $controller(gitCtrl, {
      githuberScope: githuberScope
    });
  }));

  it('should check that gitCtrl is defined', function() {
    expect(gitCtrl).toBeDefined();
  });
});
