import * as data from '../geo.json';

alert(data);

export class Capital {
    private map: Map<string, Array<string>>;
    private map2: Map<string, Array<string>>;


    constructor(region : string, order : string, num : string) {
        alert("banana");
        this.map = new Map<string, Array<string>>;

        const countryList = data[0].countries.filter((elem) => {
            if (region !== "all") {
                elem.continent == region;
            } else {
                true;
            }
        }).map((elem) => {
            elem.name;
        });
        alert(countryList[0]);
        const capitalList = data[0].countries.map((elem) => {
            elem.capital;
        });

        var zipped = [];
        if (order == "chosen") {
            zipped = countryList.zip(capitalList);
        } else {
            zipped = capitalList.zip(countryList);
        }
    }
}