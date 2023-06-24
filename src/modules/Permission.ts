import {Permission, RESULTS, check, request} from 'react-native-permissions';

export default async function permission(checkPermission: Permission) {
  const permissionCheck = await check(checkPermission);

  if (permissionCheck !== RESULTS.GRANTED) {
    return await request(checkPermission);
  }
  return;
}
