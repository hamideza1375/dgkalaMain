import React, { useState } from 'react';
import { View, Image, Pressable, Platform } from 'react-native';
import { P } from '../Html';

function Card({ imgClick, style, header, body, footer, bgcolor = 'white', color, alert, border = [1], img, dr = 'ltr', imageStyle, headerRow, footerRow, bodyRow, ...prop }) {

  const [heightLayout, setheightLayout] = useState(0)

  return !img ? ((
    !alert ?
      <View
        {...prop}
        style={[{
          borderRadius: 5,
          borderWidth: border[0],
          borderColor:
            !border[1] && (
              !bgcolor && '#fbb' ||
              bgcolor == 'black' && '#999' ||
              bgcolor == 'silver' && 'silver' ||
              bgcolor == 'blue' && 'blue' ||
              bgcolor == 'red' && 'red' ||
              bgcolor == 'green' && 'green' ||
              bgcolor == 'yellow' && 'yellow' ||
              bgcolor == 'white' && '#ccc' ||
              bgcolor) ||
            border[1]
          ,
          backgroundColor:
            !bgcolor && '#fbb' ||
            bgcolor == 'black' && '#444' ||
            bgcolor == 'silver' && '#cfcfcf' ||
            bgcolor == 'blue' && '#003' ||
            bgcolor == 'red' && '#400' ||
            bgcolor == 'green' && '#031' ||
            bgcolor == 'yellow' && '#550' ||
            bgcolor == 'white' && '#fff' ||
            bgcolor
          ,
          width: '100%',
          alignSelf: 'center'
        }, style]}>
        <View style={{ padding: 12, alignItems: 'flex-start', borderRadius: 3 }} >
          {header ?
            <View style={{ width: '100%', paddingVertical: 12, paddingHorizontal: 5, }}>
              <P
                style={[{
                  color:
                    !color ?
                      bgcolor ?
                        (bgcolor == 'white') && 'black' ||
                        (bgcolor == 'silver') && 'black' ||
                        (color) && color ||
                        'white'
                        :
                        "#333"
                      :
                      color,
                  fontWeight: '700',
                  fontSize: 15,
                  width: '100%',
                }, dr === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]}>
                {header}
              </P>
            </View>
            :
            <></>
          }

          {headerRow ?
            <View style={[{
              paddingHorizontal: 5, paddingVertical: 12, width: '100%'
              //  !

            }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}>
              <View
                style={[{
                  color:
                    !color ?

                      bgcolor ?
                        (bgcolor == 'white') && 'black' ||
                        (bgcolor == 'silver') && 'black' ||
                        (color) && color ||
                        'white'
                        :
                        "#333"
                      :
                      color,
                  fontWeight: '700',
                  fontSize: 15,
                  width: '100%',

                }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                {headerRow}
              </View>
            </View>
            :
            <></>
          }


          {bodyRow ?
            <View style={[{
              paddingHorizontal: 5, paddingVertical: 12, width: '100%'
              //  !

            }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}>
              <View
                style={[{
                  color:
                    !color ?

                      bgcolor ?
                        (bgcolor == 'white') && 'black' ||
                        (bgcolor == 'silver') && 'black' ||
                        (color) && color ||
                        'white'
                        :
                        "#333"
                      :
                      color,
                  fontWeight: '700',
                  fontSize: 15,
                  width: '100%',

                }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                {bodyRow}
              </View>
            </View>
            :
            <></>
          }


          {body ?
            <View style={{ paddingVertical: 12, paddingHorizontal: 5, width: '100%' }}>
              <P style={[{
                color:
                  !color ?

                    bgcolor ?
                      (bgcolor == 'white') && 'black' ||
                      (bgcolor == 'silver') && 'black' ||
                      (color) && color ||
                      'white'
                      :
                      "#333"
                    :
                    color,
              }, dr === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]} >
                {body}
              </P>
            </View>
            :
            <></>
          }
          {footer ?
            <View style={[{ paddingBottom: 5, color, width: '100%' }]}><P style={{
              textAlign: 'center',
              color:
                !color ?
                  bgcolor ?
                    (bgcolor == 'white') && 'black' ||
                    (bgcolor == 'silver') && 'black' ||
                    (color) && color ||
                    'white'
                    :
                    "#333"
                  :
                  color,
            }} >{footer}</P></View>
            :
            <></>
          }
          {footerRow ?
            <View style={[{ paddingBottom: 5, color, width: '100%' }]}>{footerRow}</View>
            :
            <></>
          }
        </View>
      </View>
      :
      (
        <View
          {...prop}
          style={[{
            borderRadius: 5,
            borderWidth: border[0],
            borderColor:
              !border[1] && (
                !bgcolor && '#fdb' ||
                bgcolor == 'blue' && '#bfd' ||
                bgcolor == 'red' && '#fdb' ||
                bgcolor == 'green' && '#dfd' ||
                bgcolor == 'yellow' && '#ffb' ||
                bgcolor == 'silver' && '#ccc' ||
                bgcolor == 'black' && 'silver' ||
                bgcolor) ||
              border[1]
            ,
            backgroundColor:
              !bgcolor && '#fdb' ||
              bgcolor == 'blue' && '#bfd' ||
              bgcolor == 'red' && '#fdb' ||
              bgcolor == 'green' && '#dfd' ||
              bgcolor == 'yellow' && '#ffb' ||
              bgcolor == 'silver' && '#ccc' ||
              bgcolor == 'black' && 'silver' ||
              bgcolor
            ,
            width: '100%',
            alignSelf: 'center'
          }, style]}>
          <View style={{ padding: 12, alignItems: 'flex-start', borderRadius: 3 }} >
            {header ?
              <View style={{ width: '100%', paddingVertical: 12, paddingHorizontal: 5 }}>
                <P
                  style={[{
                    color:
                      !color ? 'black' : color,
                    fontWeight: '700',
                    fontSize: 15,
                    width: '100%',
                  }, dr === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]}>
                  {header}
                </P>
              </View>
              :
              <></>
            }

            {headerRow ?
              <View style={[{
                paddingHorizontal: 5, paddingVertical: 12, width: '100%'
                //  !

              }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}>
                <View
                  style={[{
                    color:
                      !color ?

                        bgcolor ?
                          (bgcolor == 'white') && 'black' ||
                          (bgcolor == 'silver') && 'black' ||
                          (color) && color ||
                          'white'
                          :
                          "#333"
                        :
                        color,
                    fontWeight: '700',
                    fontSize: 15,
                    width: '100%',

                  }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                  {headerRow}
                </View>
              </View>
              :
              <></>
            }

            {bodyRow ?
              <View style={[{
                paddingHorizontal: 5, paddingVertical: 12, width: '100%'
                //  !

              }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}>
                <View
                  style={[{
                    color:
                      !color ?

                        bgcolor ?
                          (bgcolor == 'white') && 'black' ||
                          (bgcolor == 'silver') && 'black' ||
                          (color) && color ||
                          'white'
                          :
                          "#333"
                        :
                        color,
                    fontWeight: '700',
                    fontSize: 15,
                    width: '100%',

                  }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                  {bodyRow}
                </View>
              </View>
              :
              <></>
            }

            {body ?
              <View style={{ paddingVertical: 12, paddingHorizontal: 5, width: '100%' }}>
                <P style={[{
                  color:
                    !color ? 'black' : color,
                }, dr === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]} >
                  {body}
                </P>
              </View>
              :
              <></>
            }
            {footer ?
              <View style={[{ paddingBottom: 5, color, width: '100%' }]}><P style={{
                textAlign: 'center',
                color:
                  !color ?
                    bgcolor ?
                      (bgcolor == 'white') && 'black' ||
                      (bgcolor == 'silver') && 'black' ||
                      (color) && color ||
                      'white'
                      :
                      "#333"
                    :
                    color,
              }} >{footer}</P></View>
              :
              <></>
            }
            {footerRow ?
              <View style={[{ paddingBottom: 5, color, width: '100%' }]}>{footerRow}</View>
              :
              <></>
            }
          </View>
        </View>
      )
  )


  )

    :
    (

      (
        !alert ?
          <View
            onLayout={(e) => {
              e.persist && e.persist();
              setheightLayout(e.nativeEvent.layout.height)
            }}

            {...prop}
            style={[{
              borderRadius: 5, minHeight: 115, width: '100%', position: 'relative',
              borderWidth: border[0],
              borderColor:
                !border[1] ? (
                  !bgcolor && '#fbb' ||
                  bgcolor == 'black' && '#999' ||
                  bgcolor == 'silver' && 'silver' ||
                  bgcolor == 'blue' && 'blue' ||
                  bgcolor == 'red' && 'red' ||
                  bgcolor == 'green' && 'green' ||
                  bgcolor == 'yellow' && 'yellow' ||
                  bgcolor == 'white' && '#ccc' ||
                  bgcolor)
                  :
                  border[1]
              ,
              backgroundColor:
                !bgcolor && '#fbb' ||
                bgcolor == 'black' && '#444' ||
                bgcolor == 'silver' && '#cfcfcf' ||
                bgcolor == 'blue' && '#003' ||
                bgcolor == 'red' && '#400' ||
                bgcolor == 'green' && '#031' ||
                bgcolor == 'yellow' && '#550' ||
                bgcolor == 'white' && '#fff' ||
                bgcolor
              ,

            }, style]}>
            <View style={[{ padding: 12, borderRadius: 3, maxHeight:'100%'  }]} >
              {header ?
                <View style={[{
                  paddingHorizontal: 5, paddingVertical: 12, width: '79%'
                  //  !
                }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}>
                  <P
                    style={[{
                      color:
                        !color ?

                          bgcolor ?
                            (bgcolor == 'white') && 'black' ||
                            (bgcolor == 'silver') && 'black' ||
                            (color) && color ||
                            'white'
                            :
                            "#333"
                          :
                          color,
                      fontWeight: '700',
                      fontSize: 15,
                      width: '100%',
                      textAlign: 'left'
                    }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]}>
                    {header}
                  </P>
                </View>
                :
                <></>
              }




              {headerRow ?
                <View style={[{
                  paddingHorizontal: 5, paddingVertical: 12, width: '79%'
                  //  !

                }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}>
                  <View
                    style={[{
                      color:
                        !color ?

                          bgcolor ?
                            (bgcolor == 'white') && 'black' ||
                            (bgcolor == 'silver') && 'black' ||
                            (color) && color ||
                            'white'
                            :
                            "#333"
                          :
                          color,
                      fontWeight: '700',
                      fontSize: 15,
                      width: '100%',

                    }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                    {headerRow}
                  </View>
                </View>
                :
                <></>
              }



              <View
                style={[{
                  top: 0,
                  position: 'absolute',
                  height: 100,
                  justifyContent: 'center',
                  width:imageStyle?.width? imageStyle.width: 75,
                  // maxWidth: '50%',
                  // borderWidth:1
                }, dr === 'ltr' ? { left: 5, paddingLeft: 10 } : { right: 5, paddingRight: 10 }]} >

                <Pressable onPress={imgClick} style={{ width:imageStyle?.width? imageStyle.width: 75, height:imageStyle?.height? imageStyle.height: 75, borderRadius: 50, alignSelf: 'center', top: 15, position: 'absolute', cursor: imgClick ? 'pointer' : '' }} >
                  <Image source={img} style={[{
                    width: 75, height: 75, borderRadius: 50, alignSelf: 'center', resizeMode: 'stretch',
                  }, imageStyle]}
                  />
                </Pressable>

                {footer ?
                  <View style={[{
                    top: 58,
                    // paddingRight: 2,
                    paddingVertical: 5, width:80
                  }, dr === 'rtl' ? { alignSelf: 'flex-end', paddingRight: 2 } : { alignSelf: 'flex-start', paddingLeft: 2 }]}><P style={{
                    textAlign: 'center',
                    color:
                      !color ?
                        bgcolor ?
                          (bgcolor == 'white') && 'black' ||
                          (bgcolor == 'silver') && 'black' ||
                          (color) && color ||
                          'white'
                          :
                          "#333"
                        :
                        color,
                  }} >{footer}</P></View>
                  :
                  <></>
                }
              </View>

              {footerRow ?
               <View style={[{ position: 'absolute', paddingRight: 2, paddingVertical: 5, bottom: 0, width: 70, height: heightLayout - 100 }, dr === 'ltr' ? { left: 5 } : { right: 5 }, Platform.OS === 'web' ? {bottom:0} : {bottom:1} ]} >
                {footerRow}
              </View>
            :
            <></>  
            }

              {body ?
                <View style={[{
                  paddingHorizontal: 5, paddingVertical: 12, width: '79%'
                  //  !
                }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}
                >
                  <P style={[{
                    color:
                      !color ?

                        bgcolor ?
                          (bgcolor == 'white') && 'black' ||
                          (bgcolor == 'silver') && 'black' ||
                          (color) && color ||
                          'white'
                          :
                          "#333"
                        :
                        color,
                  }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                    {body}
                  </P>
                </View>
                :
                <></>
              }
              {bodyRow ?
                <View style={[{
                  paddingHorizontal: 5, paddingVertical: 12, width: '79%',
                }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}
                >
                  <View
                    style={[{
                      color:
                        !color ? 'black' : color,
                      fontWeight: '700',
                      fontSize: 15,
                      width: '100%',
                    }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                    {bodyRow}
                  </View>
                </View>
                :
                <></>
              }
            </View>
          </View>







          :

          (
            <View
              onLayout={(e) => {
                e.persist && e.persist();
                setheightLayout(e.nativeEvent.layout.height)
              }}
              {...prop}
              style={[{
                borderRadius: 5, minHeight: 115, width: '100%', position: 'relative',
                borderWidth: border[0],
                borderColor:
                  !border[1] ? (
                    !bgcolor && '#fdb' ||
                    bgcolor == 'blue' && '#bfd' ||
                    bgcolor == 'red' && '#fdb' ||
                    bgcolor == 'green' && '#dfd' ||
                    bgcolor == 'yellow' && '#ffb' ||
                    bgcolor == 'black' && '#ccc' ||
                    bgcolor == 'silver' && 'silver' ||
                    bgcolor)
                    :
                    border[1]
                ,
                backgroundColor:
                  !bgcolor && '#fdb' ||
                  bgcolor == 'blue' && '#bfd' ||
                  bgcolor == 'red' && '#fdb' ||
                  bgcolor == 'green' && '#dfd' ||
                  bgcolor == 'yellow' && '#ffb' ||
                  bgcolor == 'silver' && '#ccc' ||
                  bgcolor == 'black' && 'silver' ||
                  bgcolor
                ,
              }, style]}>

              <View style={{ padding: 12, borderRadius: 3, maxHeight:'100%' }} >
                {header ?
                  <View style={[{
                    paddingHorizontal: 5, paddingVertical: 12, width: '79%'
                  }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}
                  >
                    <P
                      style={[{
                        color:
                          !color ? 'black' : color,
                        fontWeight: '700',
                        fontSize: 15,
                        width: '100%',
                      }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                      {header}
                    </P>
                  </View>
                  :
                  <></>
                }



                {headerRow ?
                  <View style={[{
                    paddingHorizontal: 5, paddingVertical: 12, width: '79%'
                  }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}
                  >
                    <View
                      style={[{
                        color:
                          !color ? 'black' : color,
                        fontWeight: '700',
                        fontSize: 15,
                        width: '100%',
                      }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                      {headerRow}
                    </View>
                  </View>
                  :
                  <></>
                }




                <View style={[{
                  top: 0,
                  position: 'absolute',
                  height: 90,
                  justifyContent: 'center',
                  width:imageStyle?.width? imageStyle.width: 75,
                  // maxWidth: '20%',
                }, dr === 'ltr' ? { left: 5, paddingLeft: 10 } : { right: 5, paddingRight: 10 }]} >

                  <Pressable onPress={imgClick} style={{ width:imageStyle?.width? imageStyle.width: 75, height:imageStyle?.height? imageStyle.height: 75, borderRadius: 50, alignSelf: 'center', top: 15, position: 'absolute', cursor: imgClick ? 'pointer' : '' }} >
                    <Image source={img} style={[{
                      width: 75, height: 75, borderRadius: 50, alignSelf: 'center', resizeMode: 'stretch',
                    }, imageStyle]}
                    />
                  </Pressable>

                  {footer ?

                    <View style={[{ top: 63, paddingVertical: 5, color, width: 80 },
                      dr === 'rtl' ? { alignSelf: 'flex-end', paddingRight: 2 } : { alignSelf: 'flex-start', paddingLeft: 2 }]}><P style={{
                      textAlign: 'center',
                      color:
                        !color ?
                          bgcolor ?
                            (bgcolor == 'white') && 'black' ||
                            (bgcolor == 'silver') && 'black' ||
                            (color) && color ||
                            'white'
                            :
                            "#333"
                          :
                          color,
                    }} >{footer}</P></View>
                    :
                    <></>
                  }

                </View>

                {footerRow ?
                 <View style={[{ position: 'absolute', paddingRight: 2, paddingVertical: 5, bottom: 0, width: 70, height: heightLayout - 100 }, dr === 'ltr' ? { left: 5 } : { right: 5 }, Platform.OS === 'web' ? {bottom:0} : {bottom:1}]} >
                  {footerRow}
                </View>
              :
              <></>  
              }

                {body ?
                  <View style={[{
                    paddingHorizontal: 5, paddingVertical: 12, width: '79%'
                  }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}
                  >
                    <P style={[{
                      color:
                        !color ? 'black' : color,
                    }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                      {body}
                    </P>
                  </View>
                  :
                  <></>
                }

                {bodyRow ?
                  <View style={[{
                    paddingHorizontal: 5, paddingVertical: 12, width: '79%'
                  }, dr === 'rtl' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }]}
                  >
                    <View
                      style={[{
                        color:
                          !color ? 'black' : color,
                        fontWeight: '700',
                        fontSize: 15,
                        width: '100%',
                      }, dr === 'rtl' ? { textAlign: Platform.OS !== 'web' ? 'right' : 'left' } : { textAlign: Platform.OS === 'web' ? 'right' : 'left' }]} >
                      {bodyRow}
                    </View>
                  </View>
                  :
                  <></>
                }

              </View>
            </View>
          )
      )
    )
}



export default Card;