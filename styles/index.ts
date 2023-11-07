import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  selectItem: {
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomSheet: {
    backgroundColor: '#F0F3FF',
    position: 'absolute',
    top: 0,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  justifyAlignC: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectItemFont: {
    fontWeight: '400',
    fontSize: 14,
  },
  fontSize14: {
    fontWeight: '600',
    fontSize: 14,
  },
  fontSize12: {fontSize: 12, fontWeight: '400'},
  flexDirectionC: {
    flexDirection: 'column',
  },
  flexDirectionR: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
});
