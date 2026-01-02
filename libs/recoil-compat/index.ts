/**
 * Recoil compatibility layer using Jotai
 * This allows existing Recoil code to work with Jotai under the hood
 */
'use client';

import { atom as jotaiAtom, useAtom, useAtomValue, useSetAtom, PrimitiveAtom } from 'jotai';
import React from 'react';

type AtomOptions<T> = {
  key: string;
  default: T;
};

type SelectorOptions<T> = {
  key: string;
  get: (opts: { get: <V>(atom: any) => V }) => T;
};

type SelectorFamilyOptions<T, P> = {
  key: string;
  get: (param: P) => (opts: { get: <V>(atom: any) => V }) => T;
};

// Store for atoms by key
const atomRegistry = new Map<string, any>();

// Create a Recoil-like atom using Jotai
export function atom<T>(options: AtomOptions<T>): PrimitiveAtom<T> {
  if (atomRegistry.has(options.key)) {
    return atomRegistry.get(options.key);
  }
  const newAtom = jotaiAtom(options.default);
  atomRegistry.set(options.key, newAtom);
  return newAtom;
}

// Create a Recoil-like selector using Jotai derived atom
export function selector<T>(options: SelectorOptions<T>) {
  if (atomRegistry.has(options.key)) {
    return atomRegistry.get(options.key);
  }
  
  const derivedAtom = jotaiAtom((get) => {
    const getWrapper = <V,>(atom: any): V => get(atom);
    return options.get({ get: getWrapper });
  });
  
  atomRegistry.set(options.key, derivedAtom);
  return derivedAtom;
}

// Create a Recoil-like selectorFamily using Jotai
export function selectorFamily<T, P>(options: SelectorFamilyOptions<T, P>) {
  const familyCache = new Map<string, any>();
  
  return (param: P) => {
    const cacheKey = `${options.key}-${JSON.stringify(param)}`;
    
    if (familyCache.has(cacheKey)) {
      return familyCache.get(cacheKey);
    }
    
    const derivedAtom = jotaiAtom((get) => {
      const getWrapper = <V,>(atom: any): V => get(atom);
      return options.get(param)({ get: getWrapper });
    });
    
    familyCache.set(cacheKey, derivedAtom);
    return derivedAtom;
  };
}

// Recoil-like hooks using Jotai
export function useRecoilState<T>(atom: PrimitiveAtom<T>): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useAtom(atom);
  return [value, setValue as (value: T | ((prev: T) => T)) => void];
}

export function useRecoilValue<T>(atom: any): T {
  return useAtomValue(atom) as T;
}

export function useSetRecoilState<T>(atom: PrimitiveAtom<T>): (value: T | ((prev: T) => T)) => void {
  return useSetAtom(atom) as (value: T | ((prev: T) => T)) => void;
}

// RecoilRoot replacement - just passes children through since Jotai uses Provider at app level
export function RecoilRoot({ children }: { children: React.ReactNode }) {
  return React.createElement(React.Fragment, null, children);
}

export default {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  RecoilRoot,
};
