import React from 'react'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import {IconButton} from '@mui/material';

const Messanger = () => {
    return (<div className='w-full'>
            <div className='h-16 p-3 border-b '>
                <div className='flex '>
                    <div>
                        <img src='https://picsum.photos/200/300' className='w-11 h-11 object-cover rounded-full'
                             alt=''/>
                    </div>
                    <span className='text-xs font-semibold px-2'>kullanıcı Adı </span>
                </div>
            </div>
            <div className='mt-5 overflow-auto h-[72vh]'>
                <div className='px-5 mb-3 w-2/3 float-right'>
                    <p className="border rounded-xl p-3 flex flex-start z-0">
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                        metinlerdir. Lorem Ipsum,
                        adı bilinmeyen bir matbaacının bir hurufat numune kitabı
                        oluşturmak üzere bir yazı galerisini alarak karıştırdığı
                        1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                        Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
                        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda
                        Lorem Ipsum pasajları da içeren Letraset yapraklarının
                        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
                        masaüstü yayıncılık yazılımları ile popüler olmuştur.
                        Neden Kullanırız?
                    </p>
                </div>
                <div className='px-5 mb-3 w-2/3 float-left'>
                    <p className="border rounded-xl p-3 flex flex-start">
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                        metinlerdir. Lorem Ipsum,
                        adı bilinmeyen bir matbaacının bir hurufat numune kitabı
                        oluşturmak üzere bir yazı galerisini alarak karıştırdığı
                        1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                        Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
                        aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda
                        Lorem Ipsum pasajları da içeren Letraset yapraklarının
                        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
                        masaüstü yayıncılık yazılımları ile popüler olmuştur.
                        Neden Kullanırız?
                    </p>
                </div>
            </div>
            <div className='absolute w-full bottom-0 p-5'>
                <div className='w-full p-1 z-10 rounded-full border items-center flex'>
                    <IconButton>
                        <SentimentSatisfiedAltOutlinedIcon/>
                    </IconButton>
                    <input className='outline-none' placeholder='Mesaj yaz...'/>
                </div>
            </div>

        </div>)
}

export default Messanger