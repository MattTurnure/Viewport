(function () {
    'use strict';

    angular.module('app')
        .factory('DataFactory', DataFactory);

    function DataFactory($q, $timeout) {
        var dataSmall = [
            [1, "BF9D110D-27EC-48D0-9D21-F1452CA6B14C", 1, 1410464810, "689673", 1410464810, "689673", "{\n}", "939 ELLIS ST", "Bay Area Air Quality Management District (BAAQMD)", "ELLIS", "2", "4", "SW", "8", "1997", ["{\"address\":\"ELLIS\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.78346622", "-122.42177834", null, false]],
            [2, "3053DBDB-D6B6-40AB-B542-3C73026E6B23", 2, 1410464810, "689673", 1410464810, "689673", "{\n}", "1380 HOWARD ST", "San Francisco Department of Public Health", "HOWARD", "1", "2", "SW", "UK", "1998", ["{\"address\":\"HOWARD\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77445800", "-122.41441100", null, false]],
            [3, "787AC846-A4E0-4B15-93C3-098F6A23EF70", 3, 1410464810, "689673", 1410464810, "689673", "{\n}", "1195 OAK ST", "Oakside Cafe", "OAK", "1", "2", "SW", "UK", "2000", ["{\"address\":\"OAK\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77273700", "-122.43888700", null, false]],
            [4, "71ED2836-1BD9-4E02-8F9E-12A7D24EADA3", 4, 1410464810, "689673", 1410464810, "689673", "{\n}", "1387 VALENCIA ST", "Synergy School", "VALENCIA", "1", "2", "SW", "UK", "2000", ["{\"address\":\"VALENCIA\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.75087429", "-122.42019976", null, false]],
        ];

        var dataMedium = [
            [1, "BF9D110D-27EC-48D0-9D21-F1452CA6B14C", 1, 1410464810, "689673", 1410464810, "689673", "{\n}", "939 ELLIS ST", "Bay Area Air Quality Management District (BAAQMD)", "ELLIS", "2", "4", "SW", "8", "1997", ["{\"address\":\"ELLIS\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.78346622", "-122.42177834", null, false]],
            [2, "3053DBDB-D6B6-40AB-B542-3C73026E6B23", 2, 1410464810, "689673", 1410464810, "689673", "{\n}", "1380 HOWARD ST", "San Francisco Department of Public Health", "HOWARD", "1", "2", "SW", "UK", "1998", ["{\"address\":\"HOWARD\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77445800", "-122.41441100", null, false]],
            [3, "787AC846-A4E0-4B15-93C3-098F6A23EF70", 3, 1410464810, "689673", 1410464810, "689673", "{\n}", "1195 OAK ST", "Oakside Cafe", "OAK", "1", "2", "SW", "UK", "2000", ["{\"address\":\"OAK\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77273700", "-122.43888700", null, false]],
            [4, "71ED2836-1BD9-4E02-8F9E-12A7D24EADA3", 4, 1410464810, "689673", 1410464810, "689673", "{\n}", "1387 VALENCIA ST", "Synergy School", "VALENCIA", "1", "2", "SW", "UK", "2000", ["{\"address\":\"VALENCIA\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.75087429", "-122.42019976", null, false]],
            [5, "EE26676C-BFF9-4D71-9C80-1ADA4004DBE2", 5, 1410464810, "689673", 1410464810, "689673", "{\n}", "180 TOWNSEND ST", "Say Media ", "TOWNSEND", "1", "2", "SW", "UK", "2000", ["{\"address\":\"TOWNSEND\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77936900", "-122.39260600", null, false]],
            [6, "7B74491A-A5C4-436A-A305-9AC8890AB201", 6, 1410464810, "689673", 1410464810, "689673", "{\n}", "247 FILLMORE ST", "Metro Cafe", "FILLMORE", "1", "2", "SW", "UK", "2000", ["{\"address\":\"FILLMORE\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77185018", "-122.43065953", null, false]],
            [7, "025F40A0-FECC-4041-8725-23D449F30CCC", 7, 1410464810, "689673", 1410464810, "689673", "{\n}", "247 FILLMORE ST", "Metro Cafe", "FILLMORE", "1", "2", "SW", "UK", "2000", ["{\"address\":\"FILLMORE\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77185018", "-122.43065953", null, false]],
            [8, "60D1E343-0A06-4E6D-83F9-6423A44CA868", 8, 1410464810, "689673", 1410464810, "689673", "{\n}", "2690 MISSION ST", "Walgreens", "MISSION", "2", "4", "SW", "UK", "2000", ["{\"address\":\"MISSION\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.75402900", "-122.41897400", null, false]]
        ];

        var dataBig = [
            [1, "BF9D110D-27EC-48D0-9D21-F1452CA6B14C", 1, 1410464810, "689673", 1410464810, "689673", "{\n}", "939 ELLIS ST", "Bay Area Air Quality Management District (BAAQMD)", "ELLIS", "2", "4", "SW", "8", "1997", ["{\"address\":\"ELLIS\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.78346622", "-122.42177834", null, false]],
            [2, "3053DBDB-D6B6-40AB-B542-3C73026E6B23", 2, 1410464810, "689673", 1410464810, "689673", "{\n}", "1380 HOWARD ST", "San Francisco Department of Public Health", "HOWARD", "1", "2", "SW", "UK", "1998", ["{\"address\":\"HOWARD\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77445800", "-122.41441100", null, false]],
            [3, "787AC846-A4E0-4B15-93C3-098F6A23EF70", 3, 1410464810, "689673", 1410464810, "689673", "{\n}", "1195 OAK ST", "Oakside Cafe", "OAK", "1", "2", "SW", "UK", "2000", ["{\"address\":\"OAK\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77273700", "-122.43888700", null, false]],
            [4, "71ED2836-1BD9-4E02-8F9E-12A7D24EADA3", 4, 1410464810, "689673", 1410464810, "689673", "{\n}", "1387 VALENCIA ST", "Synergy School", "VALENCIA", "1", "2", "SW", "UK", "2000", ["{\"address\":\"VALENCIA\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.75087429", "-122.42019976", null, false]],
            [5, "EE26676C-BFF9-4D71-9C80-1ADA4004DBE2", 5, 1410464810, "689673", 1410464810, "689673", "{\n}", "180 TOWNSEND ST", "Say Media ", "TOWNSEND", "1", "2", "SW", "UK", "2000", ["{\"address\":\"TOWNSEND\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77936900", "-122.39260600", null, false]],
            [6, "7B74491A-A5C4-436A-A305-9AC8890AB201", 6, 1410464810, "689673", 1410464810, "689673", "{\n}", "247 FILLMORE ST", "Metro Cafe", "FILLMORE", "1", "2", "SW", "UK", "2000", ["{\"address\":\"FILLMORE\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77185018", "-122.43065953", null, false]],
            [7, "025F40A0-FECC-4041-8725-23D449F30CCC", 7, 1410464810, "689673", 1410464810, "689673", "{\n}", "247 FILLMORE ST", "Metro Cafe", "FILLMORE", "1", "2", "SW", "UK", "2000", ["{\"address\":\"FILLMORE\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77185018", "-122.43065953", null, false]],
            [8, "60D1E343-0A06-4E6D-83F9-6423A44CA868", 8, 1410464810, "689673", 1410464810, "689673", "{\n}", "2690 MISSION ST", "Walgreens", "MISSION", "2", "4", "SW", "UK", "2000", ["{\"address\":\"MISSION\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.75402900", "-122.41897400", null, false]],
            [9, "ABB64000-31E3-498B-8E2D-A24DEAB513E0", 9, 1410464810, "689673", 1410464810, "689673", "{\n}", "400 MCALLISTER ST", "Superior Court House", "MCALLISTER", "7", "14", "SW", "UK", "2000", ["{\"address\":\"MCALLISTER\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.78051900", "-122.41901400", null, false]],
            [10, "1497A65D-3BB5-4895-A28B-95A8C8FD5211", 10, 1410464810, "689673", 1410464810, "689673", "{\n}", "680 08TH ST", "UK", "08TH ST", "1", "2", "SW", "UK", "2000", ["{\"address\":\"08TH ST\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77012800", "-122.40471900", null, false]],
            [11, "51C81DAB-8639-4239-8EF2-D58620E2B9EC", 11, 1410464810, "689673", 1410464810, "689673", "{\n}", "101 TOWNSEND ST", "UK", "TOWNSEND", "1", "2", "SW", "UK", "2000", ["{\"address\":\"TOWNSEND\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.78022600", "-122.39046600", null, false]],
            [12, "5DC014E7-8D0C-40C1-A1DC-884FEF9D2CAA", 12, 1410464810, "689673", 1410464810, "689673", "{\n}", "1186 FOLSOM ST", "UK", "FOLSOM", "1", "2", "SW", "UK", "2000", ["{\"address\":\"FOLSOM\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77547000", "-122.40986600", null, false]],
            [13, "CB4ED699-F2B2-44D9-97CF-5A4C4B8E4746", 13, 1410464810, "689673", 1410464810, "689673", "{\n}", "1301 SANSOME ST", "Pearson Education", "SANSOME", "1", "2", "SW", "UK", "2000", ["{\"address\":\"SANSOME\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.80232700", "-122.40329800", null, false]],
            [14, "FA950DF3-5700-4FA7-8243-BC44AFA7DDEF", 14, 1410464810, "689673", 1410464810, "689673", "{\n}", "1304 VALENCIA ST", "Muddy Waters coffee shop", "VALENCIA", "1", "2", "SW", "UK", "2000", ["{\"address\":\"VALENCIA\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.75185100", "-122.42093500", null, false]],
            [15, "4B052AE6-E55F-49A9-9C6F-BD528AA8E87A", 15, 1410464810, "689673", 1410464810, "689673", "{\n}", "1380 VALENCIA ST", "Apt/UK", "VALENCIA", "1", "2", "SW", "UK", "2000", ["{\"address\":\"VALENCIA\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.75080200", "-122.42083400", null, false]],
            [16, "196E9AD2-0F68-42D7-A504-F7A7E08DDB94", 16, 1410464810, "689673", 1410464810, "689673", "{\n}", "1601 HOWARD ST", "Sage Lounge", "HOWARD", "2", "4", "SW", "UK", "2000", ["{\"address\":\"HOWARD\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}", "37.77139400", "-122.41678900", null, false]]
        ];

        return {
            getSmallData: getSmallData,
            getMediumData: getMediumData,
            getBigData: getBigData
        }

        function getSmallData() {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(dataSmall)
            });

            return deferred.promise;
        }

        function getMediumData() {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(dataMedium)
            });

            return deferred.promise;
        }

        function getBigData() {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(dataBig);
            });

            return deferred.promise;
        }
    }
}());