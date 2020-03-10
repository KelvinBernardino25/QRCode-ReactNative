import './config/StatusBarConfig';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {home, loader, create} from './screens';

const StackNavigator = createStackNavigator({
  home,
  loader,
  create,
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
