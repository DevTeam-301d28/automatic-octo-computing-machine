import React, { Component } from 'react';
import BroadageWidget from 'broadage-widget-react';

export class SampleSoccerFixture extends Component {
     onActionCallback = ( widgetType, actionType, actionPayload ) => {
       console.log( widgetType, actionType, actionPayload );
     };

     render() {
       return (
         <BroadageWidget
           requiredFields={{ tournamentId: 7 }}
           options={{ lang: 'en' }}
           widget="soccerFixture"
           bundleId="soccer-tst"
           teamId = "508"
           accountId="0553d2b2-4a50-40b1-ab99-056027270d98"
           className="widget-wrapper"
           queryStringParse={{ tournamentId: 'tid' }}
           onActionCallback={this.onActionCallback}
         />
       );
     }
}

export class SampleBasketballMatchCenter extends Component {
     onActionCallback = ( widgetType, actionType, actionPayload ) => {
       console.log( widgetType, actionType, actionPayload );
     };

     render() {

       return (
         <BroadageWidget
           requiredFields={{ matchId: 286298 }}
           options={{ lang: 'fr-FR', theme: 'darkBlue' }}
           widget="basketballMatchCenter"
           bundleId="basketball-mc"
           accountId="0000-0000-0000"
           className="widget-wrapper"
           queryStringParse={{ matchId: 'mid' }}
           onActionCallback={this.onActionCallback}
         />
       );
     }
}
