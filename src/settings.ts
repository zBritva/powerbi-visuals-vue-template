
"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class VisualSettings extends DataViewObjectsParser  {
    public chart: Chart = new Chart();
    public map: Mapbox = new Mapbox();
    public plotly: Plotly = new Plotly();
}

export class Chart {
    public schema: string = "{}"
}

export class Mapbox {
    public mapboxToken: string = "";
}

export class Plotly {
    public colorway: boolean = true;
    public colordata: boolean = true;
    public syncTracesByColumns: boolean = false;
    public resetRangeOnMapping: boolean = false;
}