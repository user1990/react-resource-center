import React from 'react';
// React-Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fusTheme from '../components/fusTheme';
// Components
import SideNav from '../components/SideNav';
// import ScrollIntoView from '../components/ScrollIntoView';
// Views
import Glossary from '../views/Glossary';
import Home from '../views/Home';
import Letterhead from '../views/Letterhead';
import Logos from '../views/Logos';
import PlanningGuide from '../views/PlanningGuide';
import Posters from '../views/Posters';
import PosterVideos from '../views/PosterVideos';
import ServiceRequest from '../views/ServiceRequest';
import Services from '../views/Services';
import Story from '../views/Story';
import Tutorial from '../views//Tutorial';
import NotFound from '../views/NotFound';
// Styles
import '../styles/App.scss';
import '../styles/materialize-grid.scss';

injectTapEventPlugin();

const Routes = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
        <div>
          <SideNav />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/logos" component={Logos} />
            <Route path="/posters" component={Posters} />
            <Route path="/letterhead" component={Letterhead} />
            <Route path="/share-a-story" component={Story} />
            <Route path="/planning-guide" component={PlanningGuide} />
            <Route path="/glossary" component={Glossary} />
            <Route path="/services" component={Services} />
            <Route path="/service-request-form" component={ServiceRequest} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/poster-videos" component={PosterVideos} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default Routes;
