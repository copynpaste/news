/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2012, 2014
 */
//angular
import angular from 'angular';
import News from '../../../app/bootstrap';

//angular modules
import 'angular-mocks';

window.app = angular.module('News', [News, 'ngMock']);
