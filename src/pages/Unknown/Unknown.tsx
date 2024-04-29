import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

export const Unknown = observer(() => <Navigate to={'/not-found'}></Navigate>);
