import { FbEvent } from '@/models/FbEvent';
import { Linking, Platform } from 'react-native';

const openMapsByEvent = (event: FbEvent) => {
  if (!event?.location?.geolocation) {
    return;
  }

  const { latitude, longitude } = event.location.geolocation;
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${latitude},${longitude}`;
  const url = Platform.select({
    ios: `${scheme}${event.location.name}@${latLng}`,
    android: `${scheme}${latLng}(${event.location.name})`,
  });

  Linking.openURL(url!).then();
};

const mapUtils = {
  openMapsByEvent,
};

export default mapUtils;
