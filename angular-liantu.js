angular.module('l42y.liantu', []).directive('liantu', function (
  $window
) {
  var pixelRatio = $window.getDevicePixelRatio().toFixed();

  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      var name = 'liantu';
      var size = $attrs.width;
      var sizeStr = size ? '&w=' + size * pixelRatio : '';
      var text = encodeURIComponent($attrs.liantu);
      var params = '';
      angular.forEach($attrs, function (value, key) {
        if (key.substring(0, name.length) === name &&
            key.length > name.length) {
          var param = key.substring(name.length).toLowerCase();
          params = params +
            '&' + param +
            '=' + $attrs[key];
        }
      });
      var src = '//qr.liantu.com/api.php?text=' + text +
            sizeStr + params;
      $attrs.$set('src', src);
    }
  };
});
