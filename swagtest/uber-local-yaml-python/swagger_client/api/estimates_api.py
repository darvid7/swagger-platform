# coding: utf-8

"""
    Uber API

    Move your app forward with the Uber API  # noqa: E501

    OpenAPI spec version: 1.0.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from swagger_client.api_client import ApiClient


class EstimatesApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def estimates_price_get(self, start_latitude, start_longitude, end_latitude, end_longitude, **kwargs):  # noqa: E501
        """Price Estimates  # noqa: E501

        The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.<br><br>The response also includes low and high estimates, and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for situations requiring currency conversion. When surge is active for a particular product, its surge_multiplier will be greater than 1, but the price estimate already factors in this multiplier.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.estimates_price_get(start_latitude, start_longitude, end_latitude, end_longitude, async=True)
        >>> result = thread.get()

        :param async bool
        :param float start_latitude: Latitude component of start location. (required)
        :param float start_longitude: Longitude component of start location. (required)
        :param float end_latitude: Latitude component of end location. (required)
        :param float end_longitude: Longitude component of end location. (required)
        :return: list[PriceEstimate]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.estimates_price_get_with_http_info(start_latitude, start_longitude, end_latitude, end_longitude, **kwargs)  # noqa: E501
        else:
            (data) = self.estimates_price_get_with_http_info(start_latitude, start_longitude, end_latitude, end_longitude, **kwargs)  # noqa: E501
            return data

    def estimates_price_get_with_http_info(self, start_latitude, start_longitude, end_latitude, end_longitude, **kwargs):  # noqa: E501
        """Price Estimates  # noqa: E501

        The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.<br><br>The response also includes low and high estimates, and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for situations requiring currency conversion. When surge is active for a particular product, its surge_multiplier will be greater than 1, but the price estimate already factors in this multiplier.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.estimates_price_get_with_http_info(start_latitude, start_longitude, end_latitude, end_longitude, async=True)
        >>> result = thread.get()

        :param async bool
        :param float start_latitude: Latitude component of start location. (required)
        :param float start_longitude: Longitude component of start location. (required)
        :param float end_latitude: Latitude component of end location. (required)
        :param float end_longitude: Longitude component of end location. (required)
        :return: list[PriceEstimate]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['start_latitude', 'start_longitude', 'end_latitude', 'end_longitude']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method estimates_price_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'start_latitude' is set
        if ('start_latitude' not in params or
                params['start_latitude'] is None):
            raise ValueError("Missing the required parameter `start_latitude` when calling `estimates_price_get`")  # noqa: E501
        # verify the required parameter 'start_longitude' is set
        if ('start_longitude' not in params or
                params['start_longitude'] is None):
            raise ValueError("Missing the required parameter `start_longitude` when calling `estimates_price_get`")  # noqa: E501
        # verify the required parameter 'end_latitude' is set
        if ('end_latitude' not in params or
                params['end_latitude'] is None):
            raise ValueError("Missing the required parameter `end_latitude` when calling `estimates_price_get`")  # noqa: E501
        # verify the required parameter 'end_longitude' is set
        if ('end_longitude' not in params or
                params['end_longitude'] is None):
            raise ValueError("Missing the required parameter `end_longitude` when calling `estimates_price_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'start_latitude' in params:
            query_params.append(('start_latitude', params['start_latitude']))  # noqa: E501
        if 'start_longitude' in params:
            query_params.append(('start_longitude', params['start_longitude']))  # noqa: E501
        if 'end_latitude' in params:
            query_params.append(('end_latitude', params['end_latitude']))  # noqa: E501
        if 'end_longitude' in params:
            query_params.append(('end_longitude', params['end_longitude']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/estimates/price', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[PriceEstimate]',  # noqa: E501
            auth_settings=auth_settings,
            async=params.get('async'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def estimates_time_get(self, start_latitude, start_longitude, **kwargs):  # noqa: E501
        """Time Estimates  # noqa: E501

        The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.estimates_time_get(start_latitude, start_longitude, async=True)
        >>> result = thread.get()

        :param async bool
        :param float start_latitude: Latitude component of start location. (required)
        :param float start_longitude: Longitude component of start location. (required)
        :param str customer_uuid: Unique customer identifier to be used for experience customization.
        :param str product_id: Unique identifier representing a specific product for a given latitude & longitude.
        :return: list[Product]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async'):
            return self.estimates_time_get_with_http_info(start_latitude, start_longitude, **kwargs)  # noqa: E501
        else:
            (data) = self.estimates_time_get_with_http_info(start_latitude, start_longitude, **kwargs)  # noqa: E501
            return data

    def estimates_time_get_with_http_info(self, start_latitude, start_longitude, **kwargs):  # noqa: E501
        """Time Estimates  # noqa: E501

        The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async=True
        >>> thread = api.estimates_time_get_with_http_info(start_latitude, start_longitude, async=True)
        >>> result = thread.get()

        :param async bool
        :param float start_latitude: Latitude component of start location. (required)
        :param float start_longitude: Longitude component of start location. (required)
        :param str customer_uuid: Unique customer identifier to be used for experience customization.
        :param str product_id: Unique identifier representing a specific product for a given latitude & longitude.
        :return: list[Product]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['start_latitude', 'start_longitude', 'customer_uuid', 'product_id']  # noqa: E501
        all_params.append('async')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method estimates_time_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'start_latitude' is set
        if ('start_latitude' not in params or
                params['start_latitude'] is None):
            raise ValueError("Missing the required parameter `start_latitude` when calling `estimates_time_get`")  # noqa: E501
        # verify the required parameter 'start_longitude' is set
        if ('start_longitude' not in params or
                params['start_longitude'] is None):
            raise ValueError("Missing the required parameter `start_longitude` when calling `estimates_time_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'start_latitude' in params:
            query_params.append(('start_latitude', params['start_latitude']))  # noqa: E501
        if 'start_longitude' in params:
            query_params.append(('start_longitude', params['start_longitude']))  # noqa: E501
        if 'customer_uuid' in params:
            query_params.append(('customer_uuid', params['customer_uuid']))  # noqa: E501
        if 'product_id' in params:
            query_params.append(('product_id', params['product_id']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/estimates/time', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[Product]',  # noqa: E501
            auth_settings=auth_settings,
            async=params.get('async'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
