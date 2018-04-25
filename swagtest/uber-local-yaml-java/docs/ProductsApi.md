# ProductsApi

All URIs are relative to *https://api.uber.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsGet**](ProductsApi.md#productsGet) | **GET** /products | Product Types


<a name="productsGet"></a>
# **productsGet**
> List&lt;Product&gt; productsGet(latitude, longitude)

Product Types

The Products endpoint returns information about the Uber products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ProductsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: apikey
ApiKeyAuth apikey = (ApiKeyAuth) defaultClient.getAuthentication("apikey");
apikey.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.setApiKeyPrefix("Token");

ProductsApi apiInstance = new ProductsApi();
Double latitude = 3.4D; // Double | Latitude component of location.
Double longitude = 3.4D; // Double | Longitude component of location.
try {
    List<Product> result = apiInstance.productsGet(latitude, longitude);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ProductsApi#productsGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **Double**| Latitude component of location. |
 **longitude** | **Double**| Longitude component of location. |

### Return type

[**List&lt;Product&gt;**](Product.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

