import { Component, Prop, State } from '@stencil/core';
/**
 * A simple rating component using StencilJS
 */
@Component({
  tag: 'am-rating',
  styleUrl: 'am-rating.scss',
  shadow: true
})
export class AMRating {
  /**
   * The rating
   */
  @Prop() rating: number = 0;

  /**
   * The minimum rating possible
   */
  @Prop() minRating: number = 0;

  /**
   * The maximum rating possible
   */
  @Prop() maxRating: number = 5;

  /**
   * This is a star!
   */
  @Prop() svgPoints: string = "48 75 18.6107374 90.4508497 24.2235871 57.7254249 0.447174185 34.5491503 33.3053687 29.7745751 48 0 62.6946313 29.7745751 95.5528258 34.5491503 71.7764129 57.7254249 77.3892626 90.4508497";

  /**
   * The rating items, set once the component is loaded
   */
  @State() ratingItems: Array<object> = [];

  /**
   * The color to fill the rating with when it's within the max
   */
  @Prop() colorOn: string = "green";

  /**
   * The color to fill the rating with when it's outwith the max
   */
  @Prop() colorOff: string = "yellow";

  /**
   * The color to fill the rating with when it's outwith the max
   */
  @Prop() colorOutline: string = "black";

   /**
   * The direction of the shading.
   * Valid settings are 'ltr' (left to right) and 'ttb' (top to bottom)
   */
  @Prop() direction: string = "ltr";

  private directionSettings = {
    'ltr' : { "x1" : "0", "x2" : "1","y1" : "0","y2" : "0" },
    'ttb' : { "x1" : "0", "x2" : "0","y1" : "0","y2" : "1" }
  };

  /**
   * Once the component is loaded we
   * 1) set the rating items from the various parameters that were passed in
   */
  componentWillLoad() {
    let items = [];

    const ratingFloor = Math.floor(this.rating);
    const ratingRemainder = this.rating % 1 * 100;

    for(var i = 0; i < this.maxRating; i++){
      const itemPercent = i < ratingFloor ? 100 : ( ratingFloor === i ? ratingRemainder : 0 );

      items.push({
        svgPoints : this.svgPoints,
        percent :  itemPercent + "%"
      });
    }

    this.ratingItems = items;
  }

  /**
   * When the state changes,
   * render the view
   */
  render() {
    return (
      <div>
        {this.ratingItems.map( (ratingItem, i ) =>
        <svg
          viewBox="0 0 100 100"
          version="1.1"
          width={this.direction === 'ltr' ? (100 / this.ratingItems.length ) + '%' : '100%'}
          xmlns="http://www.w3.org/2000/svg"
          class="rating-item"
          >
            <defs>
              <linearGradient
                id={"fill-" + ratingItem['percent']}
                x1={this.directionSettings[this.direction]['x1']}
                x2={this.directionSettings[this.direction]['x2']}
                y1={this.directionSettings[this.direction]['y1']}
                y2={this.directionSettings[this.direction]['y2']}
              >
                <stop offset={ratingItem['percent']} stop-color={this.colorOn} stop-opacity="1"/>
                <stop offset={ratingItem['percent']}  stop-color={this.colorOff} stop-opacity="1"/>
              </linearGradient>
            </defs>
            <g
              stroke="none"
              stroke-width="1">
                <polygon
                  id="star"
                  stroke={this.colorOutline}
                  stroke-width="1"
                  class={"rating-item-shape rating-item-shape-fill-percent-" + ratingItem['percent']}
                  fill={"url(#fill-" +  ratingItem['percent'] + ")"}
                  points={ ratingItem['svgPoints'] }>
              </polygon>
            </g>
        </svg>
        )}
      </div>
    );
  }
}