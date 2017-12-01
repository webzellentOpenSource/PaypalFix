/*
 * Copyright (c) 2017. CopeX GmbH (https://copex.io), Author: Roman Hutterer (roman)
 * File: requirejs-config.js
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

var config = {
    map: {
        '*': {
            'Magento_Paypal/js/action/set-payment-method':'CopeX_PaypalFix/js/action/set-payment-method'
        }
    }
};