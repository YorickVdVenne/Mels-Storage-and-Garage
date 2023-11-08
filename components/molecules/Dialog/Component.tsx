import React, { ReactNode, useCallback, useEffect } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/atoms/Button/Component';
import { hasValue } from '@/misc/helpers';
import styles from './styles.module.css'

interface DialogProps {
  open: boolean
  onCloseClick: () => void
  data?: {
    title: string
    description: string
  }
}

export default function Dialog (props: DialogProps): JSX.Element {
  const { open, onCloseClick, data } = props

  const keyDownHandler = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape' && onCloseClick) {
      onCloseClick()
    }
  }, [onCloseClick])

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [keyDownHandler])
  
  return (
    <RadixDialog.Root open={open}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={`${styles.overlay} bg-navy fixed inset-0 z-20 opacity-70`} onClick={onCloseClick} />
        <RadixDialog.Content className={`${styles.content} bg-light-navy rounded-lg z-30 shadow-lg fixed top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-7xl max-h-[85vh] p-10 focus:outline-none`}>
          {hasValue(data) && (
            <>            
              <RadixDialog.Title className="m-0 e text-3xl">{data.title}</RadixDialog.Title>
              <RadixDialog.Description className="mt-2">
                {data.description}
              </RadixDialog.Description>
              <div>
                
              </div>
              <div className='flex mt-5 justify-end'>
                <RadixDialog.Close asChild>
                  <Button as='button' onClick={() => window.location.href = 'mailto:melchior.vdv@hotmail.com'} className='text-lg'>Contact me</Button>
                </RadixDialog.Close>
              </div>
            </>
          )}
          <RadixDialog.Close asChild>
            <button onClick={onCloseClick} className="h-10 w-10 inline-flex items-center justify-center text-navy absolute top-4 right-4" aria-label="Close">
              <FontAwesomeIcon className='text-white hover:text-red transition-all w-6 h-6' width={28} height={28} icon={['fas', 'xmark']} />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
