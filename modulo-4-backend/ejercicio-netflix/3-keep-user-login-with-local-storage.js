// 4. Mantén logada a la usuaria

// Fichero App.js

import ls from '../services/local-storage';

const [userId, setUserId] = useState(ls.get('userId', ''));

// useEffect + localStorage: keep user login
useEffect(() => {
  if (userId !== '') {
    ls.set('userId', userId);
  }
}, [userId]);
