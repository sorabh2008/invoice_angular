angular.module('invoicing', [])

// The default logo for the invoice
.constant('DEFAULT_LOGO', 'images/metaware_logo.png')

// The invoice displayed when the user first uses the app
.constant('DEFAULT_INVOICE', {
  tax: 12.50,
  toWords_a:['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '],
  toWords_b:['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'],
  customer_info: {
    name: 'Splay UK Limited',
    address1: '89, College Road',
    address2: 'Handsworth Wood',
	city: 'Birmingham',
	state: 'West Midlands',
	country_postal: 'U.K. , B20 2JH.',
	mobile:''
  },
  company_info: {
    name: 'Jainson Sales Corporation',
    address1: 'Saleempur Road, Near Poultry Farm',
    address2: 'Godaipur',
	city: 'Jalandhar',
	state: 'Punjab',
	country: 'INDIA',
    postal: '144004',
	mobile: '+91 98140 70086'
  },
  invoice_info:{
	number:001,
	date:'',
	spmark:'SP/1-',
	exporterRefNo:'IE CODE NO. 3004008530',
	currency:''
  },
  carriageBy:'By Sea',
  countryOfOriginOfGoods:'INDIA',
  countryOfFinalDestination:'U.K.',
  portOfDischarge:'Birmingham',
  termsOfPayment:'AGAINST D.A FOR 120 DAYS',
  items:[],
  dbItems:[{
			  "code": "PVCCKTST3",
			  "description": "PVC Cricket Set",
			  "pcs": "1",
			  "per": "Set",
			  "size": "3",
			  "color": "Yellow",
			  "unit": "",
			  "price": "500",
			},{
			  "code": "PVCCKTST4",
			  "description": "PVC Cricket Set",
			  "pcs": "1",
			  "per": "Set",
			  "size": "4",
			  "color": "Yellow",
			  "unit": "",
			  "price": "600",
			},{
			  "code": "PVCCKTST5",
			  "description": "PVC Cricket Set",
			  "pcs": "1",
			  "per": "Set",
			  "size": "5",
			  "color": "Yellow",
			  "unit": "",
			  "price": "700",
			},{
			  "code": "PVCCKTST6",
			  "description": "PVC Cricket Set",
			  "pcs": "1",
			  "per": "Set",
			  "size": "6",
			  "color": "Yellow",
			  "unit": "",
			  "price": "800",
			},    {
				"code": "CKTLTBL",
				"description": "Cricket Leather Ball",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "200",
			  },
				{
				"code": "CKTLGGRD",
				"description": "Cricket Leg Guard",
				"pcs": "1",
				"per": "Pair",
				"size": "",
				"color": "",
				"unit": "",
				"price": "700",
			  },
				{
				"code": "FBLPU3",
				"description": "Football P.U.",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "400",
			  },
				{
				"code": "FBLPU6",
				"description": "Football P.U.",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "700",
			  },   {
				"code": "HCKSHNGRD",
				"description": "Hockey Shin Guard",
				"pcs": "1",
				"per": "Pair",
				"size": "",
				"color": "",
				"unit": "",
				"price": "300"
			  },
				{
				"code": "ABDGRD",
				"description": "Abdominal Guard",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "60"
			  },
				{
				"code": "CKTBTGLV",
				"description": "Cricket Batting Gloves",
				"pcs": "1",
				"per": "Pair",
				"size": "",
				"color": "",
				"unit": "",
				"price": "400",
			  },
				{
				"code": "CKTAMGRD",
				"description": "Cricket Arm Guard",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "100",
			  },
				{
				"code": "CKTTHPD",
				"description": "Cricket Thai Pads",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "200",
			  },
				{
				"code": "CKTHM",
				"description": "Cricket Helmet",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "500",
			  },
				{
				"code": "CKTBLPU",
				"description": "Cricket Ball P.U.",
				"pcs": "1",
				"per": "Pc",
				"size": "",
				"color": "",
				"unit": "",
				"price": "100",
			  }
			]
})

.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){
			var str = item.code;
			//var keys=[];
			//if(searchString !== null){
			var keys= searchString.split(" ");
			var searchKey="^(";
			/*if(keys.length>1){
				var i;
				for(i=0;i<keys.length;i++){
					searchKey = searchKey + "^" + keys[i] + "|";
				}
				searchKey = searchKey.substring(0,searchKey.length-1) + ")";
				var patt=new RegExp(searchKey);
			
				//if(item.title.toLowerCase().indexOf(searchString) !== -1){
				if(patt.exec(str) !== null){
					result.push(item);
				}
			}
			else{*/
				searchKey=searchString;
				if(str.toLowerCase().indexOf(searchString) !== -1){
					result.push(item);
				}
			//}
			
			var patt=new RegExp(searchKey);
			
			//if(item.title.toLowerCase().indexOf(searchString) !== -1){
			//if(patt.exec(str) !== null){
			//	result.push(item);
			//}

		});

		return result;
	};

})

// Service for accessing local storage
.service('LocalStorage', [function() {

  var Service = {};

  // Returns true if there is a logo stored
  var hasLogo = function() {
    return !!localStorage['logo'];
  };

  // Returns a stored logo (false if none is stored)
  Service.getLogo = function() {
    if (hasLogo()) {
      return localStorage['logo'];
    } else {
      return false;
    }
  };

  Service.setLogo = function(logo) {
    localStorage['logo'] = logo;
  };

  // Checks to see if an invoice is stored
  var hasInvoice = function() {
    return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
  };

  // Returns a stored invoice (false if none is stored)
  Service.getInvoice = function() {
    if (hasInvoice()) {
      return JSON.parse(localStorage['invoice']);
    } else {
      return false;
    }
  };

  Service.setInvoice = function(invoice) {
    localStorage['invoice'] = JSON.stringify(invoice);
  };

  // Clears a stored logo
  Service.clearLogo = function() {
    localStorage['logo'] = '';
  };

  // Clears a stored invoice
  Service.clearinvoice = function() {
    localStorage['invoice'] = '';
  };

  // Clears all local storage
  Service.clear = function() {
    localStorage['invoice'] = '';
    Service.clearLogo();
  };

  return Service;

}])

.service('Currency', [function(){

  var service = {};

  service.all = function() {
    return [
      {
        name: 'Canadian Dollar ($)',
        symbol: 'CAD $ '
      },
      {
        name: 'Euro (€)',
        symbol: '€'
      },
      {
        name: 'Indian Rupee (₹)',
        symbol: '₹'
      },
      {
        name: 'Norwegian krone (kr)',
        symbol: 'kr '
      },
      {
        name: 'US Dollar ($)',
        symbol: '$'
      }
    ]
  }

  return service;
  
}])


// Main application controller
.controller('InvoiceCtrl', ['$scope', '$http', 'DEFAULT_INVOICE', 'DEFAULT_LOGO', 'LocalStorage', 'Currency',
  function($scope, $http, DEFAULT_INVOICE, DEFAULT_LOGO, LocalStorage, Currency) {

  // Set defaults
  $scope.currencySymbol = '$';
  $scope.logoRemoved = false;
  $scope.printMode   = false;

  (function init() {
    // Attempt to load invoice from local storage
    !function() {
      var invoice = LocalStorage.getInvoice();
      $scope.invoice = invoice ? invoice : DEFAULT_INVOICE;
    }();

    // Set logo to the one from local storage or use default
    !function() {
      var logo = LocalStorage.getLogo();
      $scope.logo = logo ? logo : DEFAULT_LOGO;
    }();
	//
	$scope.availableCurrencies = Currency.all();

  })()
  // Adds an item to the invoice's items
  $scope.addItem = function() {
    $scope.invoice.items.unshift({ 
			code:'',
			description:'',
			pcs:'',
			per:'',
			size:'',
			color:'',
			unit:'',
			price:''
			});
  }
  $scope.addItemToList = function(product){
	$scope.invoice.items.unshift({ 
			code:product.code,
			description:product.description,
			pcs:product.pcs,
			per:product.per,
			size:product.size,
			color:product.color,
			price:product.price
			});
  }

  // Toggle's the logo
  $scope.toggleLogo = function(element) {
    $scope.logoRemoved = !$scope.logoRemoved;
    LocalStorage.clearLogo();
  };

  // Triggers the logo chooser click event
  $scope.editLogo = function() {
    // angular.element('#imgInp').trigger('click');
    document.getElementById('imgInp').click();
  };

  // Remotes an item from the invoice
  $scope.removeItem = function(item) {
    $scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
  };

  // Calculates the sub total of the invoice
  $scope.invoiceSubTotal = function() {
    var total = 0.00;
    angular.forEach($scope.invoice.items, function(item, key){
      total += (item.quantity * item.price);
    });
    return total;
  };

  // Calculates the tax of the invoice
  $scope.calculateTax = function() {
    return (($scope.invoice.tax * $scope.invoiceSubTotal())/100);
  };

  // Calculates the grand total of the invoice
  $scope.calculateGrandTotal = function() {
    saveInvoice();
    return $scope.calculateTax() + $scope.invoiceSubTotal();
  };

  // Clears the local storage
  $scope.clearLocalStorage = function() {
    var confirmClear = confirm('Are you sure you would like to clear the invoice?');
    if(confirmClear) {
      LocalStorage.clear();
      setInvoice(DEFAULT_INVOICE);
    }
  };
	

  $scope.saveInvoiceToLocal = function() {
    saveInvoice();
  };
  // Sets the current invoice to the given one
  var setInvoice = function(invoice) {
    $scope.invoice = invoice;
    saveInvoice();
  };
	
  // Insert New Product Config into DB
  $scope.insertToDB = function() {
		var data = $scope.invoice.items;
		var json = JSON.stringify(data);
		var blob = new Blob([json], {type: "application/json"});
		var url  = URL.createObjectURL(blob);

		var a = document.createElement('a');
		a.download    = "backup.json";
		a.href        = url;
		a.textContent = "Download backup.json";
		document.getElementById('contentDownloadLink').appendChild(a);
  }
  // Reads a url
  var readUrl = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('company_logo').setAttribute('src', e.target.result);
        LocalStorage.setLogo(e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  };

  // Saves the invoice in local storage
  var saveInvoice = function() {
    LocalStorage.setInvoice($scope.invoice);
  };

  // Runs on document.ready
  angular.element(document).ready(function () {
    // Set focus
    document.getElementById('invoice-number').focus();

    // Changes the logo whenever the input changes
    document.getElementById('imgInp').onchange = function() {
      readUrl(this);
    };
  });
	

	$scope.inWords = function (num) {
		if ((num = num.toString()).length > 9) return 'overflow';
		n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
		if (!n) return; var str = '';
		str += (n[1] != 0) ? ($scope.invoice.toWords_a[Number(n[1])] || $scope.invoice.toWords_b[n[1][0]] + ' ' + $scope.invoice.toWords_a[n[1][1]]) + 'crore ' : '';
		str += (n[2] != 0) ? ($scope.invoice.toWords_a[Number(n[2])] || $scope.invoice.toWords_b[n[2][0]] + ' ' + $scope.invoice.toWords_a[n[2][1]]) + 'lakh ' : '';
		str += (n[3] != 0) ? ($scope.invoice.toWords_a[Number(n[3])] || $scope.invoice.toWords_b[n[3][0]] + ' ' + $scope.invoice.toWords_a[n[3][1]]) + 'thousand ' : '';
		str += (n[4] != 0) ? ($scope.invoice.toWords_a[Number(n[4])] || $scope.invoice.toWords_b[n[4][0]] + ' ' + $scope.invoice.toWords_a[n[4][1]]) + 'hundred ' : '';
		str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + ($scope.invoice.toWords_a[Number(n[5])] || $scope.invoice.toWords_b[n[5][0]] + ' ' + $scope.invoice.toWords_a[n[5][1]]) : '';
		str += ' only.';
		return str.toUpperCase();
	};
}]);

