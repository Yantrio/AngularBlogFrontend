angular.module('blogFrontendApp').directive("blogSnippet",function () {

  return {
    restrict : 'E',
    replace : 'true',
    templateUrl : '/views/blogSnippet.html'
  };
});
