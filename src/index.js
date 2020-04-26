import './main.scss';
import showAlert from './alert';
import './ReactApp';

showAlert();

if (module.hot) {
    module.hot.accept();
}
