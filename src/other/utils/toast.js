import React, { useEffect, useRef } from "react";
import { Animated, Platform } from "react-native";
import { Column, P, Swiper } from "../Components/Html";
import s from './style.module.scss';

let toastProperties;

export function Toast(p) {
  this.show = (title, description, time = 6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#555555f5',
      time
    }
    p.set_list(l => [...l, toastProperties])
  };

  this.success = (title, description, time = 6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#5cb85c',
      time
    }
    p.set_list(l => [...l, toastProperties])
  };

  this.error = (title, description, time = 6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#d9534f',
      time
    }
    p.set_list(l => [...l, toastProperties])
  };

  this.info = (title, description, time = 6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#5bc0de',
      time
    }
    p.set_list(l => [...l, toastProperties])
  };

  this.warning = (title, description, time = 6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#f0ad4e',
      time
    }
    p.set_list((l) => [...l, toastProperties])
  };
}

const shadow = {
  elevation: 5,
  shadowColor: 'black',
  shadowOpacity: .7,
  shadowRadius: 3,
  shadowOffset: {
    width: 2,
    height: 2,
  },
}
let interval

const ToastProvider = (p) => {
  if (!p._list.length) clearInterval(interval)

  useEffect(() => {
    for (let i in p._list) {
      interval = setTimeout(() => {
        if (p._list[i]) {
          p.set_list(list => list.filter((l) => l?.id !== list[i]?.id))
        }
        if (!p._list.length) clearInterval(interval)
      }, p._list[i].time);
    }
  }, [p._list])

  if (!p._list.length) clearInterval(interval)


  const fadeAnim = useRef(new Animated.Value(-270)).current;
  const start = () => {
    Animated.timing(fadeAnim, {
      toValue: 12,
      duration: 100,
      useNativeDriver: false
    }).start();
  };

  return (
    <>
      {p._list && p._list.map((toast, i) => (
        <Animated.View
          onMoveShouldSetResponder={() => { setTimeout(() => { let filter = p._list.filter((l) => l.id !== toast.id); p.set_list(filter); }, 300); }}
          key={i}
          ref={() => { if (i === 0) { fadeAnim.setValue(-270) } }}
          onLayout={() => { start(); }}
          style={[{ ...shadow }, {
            zIndex: 99999,
            position: 'absolute', top: i * 115, left: fadeAnim, width: 310, maxWidth: '95%', minHeight: 5, maxHeight: 115, paddingBottom: 8, overflow: 'hidden',
            display: 'flex',
            backgroundColor: toast.backgroundColor, borderRadius: 5,
          }, Platform.OS === 'ios' ? { marginTop: 55 } : { marginTop: 15 }]}>
          <Swiper iconRight={p._list.length <= 1 ? <Column /> : false} >

            <Column class={s.selectNone} pr={11} style={{ paddingTop: 8 }} maxw='100%' w={'100%'} >
              <P style={{ padding: 6, color: 'white', position: 'absolute', top: 1, alignSelf: 'flex-end' }}
                onClick={() => { let filter = p._list.filter((l) => l.id !== toast.id); p.set_list(filter); }}>X</P>
              <P ta='right' style={{ width: '90%', color: 'white', paddingTop: 2 }} >{toast.title}</P>
              <P ta='right' style={{ width: '95%', color: 'white', fontSize: toast.description === '√' ? 25 : 12, fontWeight: '200', paddingTop: toast.title ? 8 : 14, paddingBottom: 8, paddingRight: toast.description === '√' ? 5 : 1 }} >{toast.description}</P>
            </Column>
          </Swiper>

        </Animated.View>
      ))
      }

      {p.children}

    </>
  )
}
export default ToastProvider
