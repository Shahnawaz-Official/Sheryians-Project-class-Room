import React from 'react'
import Marquee from './Marquee'

function Marquees() {
  const images = [
   [
    "https://imgs.search.brave.com/59-mp0gOOfeDw_3NaqO0YZp5BA6e40OsMCor2ELzl80/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzMzMjdfNzg4/M2EwZmZjNzkwNmYw/ZDUzNDdkN2ZhOGU0/MmM2ODkucG5n",
    "https://imgs.search.brave.com/RWUuAUJguNTzgG3rH-B5EboVhvIpmRjYbpCAVt1To2g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/Ny8xNS9tb2Rlcm4t/Z2xvYmUtaWNvbnMt/bG9nb3MtdmVjdG9y/LTM1ODQ3MTUuanBn",
    "https://imgs.search.brave.com/P5wyECqZ4k-GLwcCaYD4Jz8Uc5whwUvceBuqvKPtGiU/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzIyODlfNzcz/OTFkNTViYWNkMmJm/NTlmZDExMTdjM2M4/NDgzYWQucG5n",
    "https://imgs.search.brave.com/yH3HaWrlH7lZGc5_efr_8NGP_cLrLYI0RIc-iokVbNQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzMzODlfN2M4/MGU4MmQyMGEzNmY3/MjQ1Yjc5MjEyZDI5/NWMyYzQuanBlZw",
    "https://imgs.search.brave.com/frS4GaqoZusp_7XLt3I6aNXhYRpyWVE9ogDvkMH-_Wc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/MDI0Mzk4Mi92ZWN0/b3IvdmVjdG9yLWRl/c2lnbi1lbWJsZW0t/c2lnbi1mb3ItYnVz/aW5lc3MtYy1sZXR0/ZXItaWNvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WlJW/bUJkM2FfVVdlcjVh/MkMyNWc5a05Ya3pZ/YnJYTHBkdWpnMW9y/TElyWT0",
    "https://imgs.search.brave.com/Un6h6VP2pPrUx50G_TpxhVGdNL1KY5sXkju92gvFWMM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/NTk3MjgxNC92ZWN0/b3IvbW9kZXJuLWFu/ZC1jcmVhdGl2ZS1n/bG9iYWwtdGVjaG5v/bG9neS1sb2dvLXdp/dGgtYmx1ZS13YXZl/LWVsZW1lbnRzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1k/Z19fc2JxeWozdW13/WnRJUGtqTXhrOHRm/ZlpzTGw4ODJQeHIz/NUFJQ0JvPQ",
    "https://imgs.search.brave.com/WVpIS8nbSrLDubGdVpv4sj3q0NFWRI0ffCMNWmM00Ic/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9UV2lLWWdURk1i/U1ZTMHF0QTdEN0Z1/aUZBVFE9LzE3MHgx/MDM1OjY3MXgxNTM3/L2ZpdC1pbi81MDB4/NTAwL3Byb2plY3Rz/LWZpbGVzLzQwLzQw/MjcvNDAyNzEzL2Qx/ZDgyYWIwLWE3N2Ut/NDhmMy04OGEwLTQ2/ZjRhMzFmYjNhMi5w/bmc",
    "https://imgs.search.brave.com/nUj6QNusLXkkIRdCbQYXdijsNs9a8W9Ab8QIQ_rlYVQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvYWR2YW5jZV9s/b2dvcy82NzQucG5n",
    "https://imgs.search.brave.com/2_AjWTKl_VJOxhNfnhcs3JmsgJCvg_5694kUXGGMyTE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA5/L1dhdHNPblRlY2gt/TG9nby10aHVtYi5w/bmc",
    "https://imgs.search.brave.com/Wbx6E4M7LiEoKMCMLTEngz3WSxylQmkxCwozdKBzlzY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNmQwNDI2/NmQtNDQxYy00NjE3/LWFmN2YtMzg2Yjc2/ZjhmMDU4L2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4NTc0MTA1/NTcxNzcwMDAw",
    "https://imgs.search.brave.com/I3uzxztjRBqhFCiaEhvqS8FS-GrEB9DE8RxBX84-i5Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFGVW82Rmts/ckkvMi8wLzE2MDB3/LWxwcDNKQjlvcVlr/LmpwZw",
    "https://imgs.search.brave.com/_5Qy-Ek85llX6_HrdzmehpCYVaSU30TnysfwbkzpPBM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE0/ODg3MDU4Ni92ZWN0/b3IvYS1jcm9zcy1v/ci1wbHVzLWdyYWRp/ZW50LWxvZ28tZnJv/bS1hYnN0cmFjdC1j/b2xvcmZ1bC1zaGFw/ZXMtY3JlYXRpdmUt/cGhhcm1hY3ktY2xp/bmljLWZsYXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVW/dVhEZ2U3MXlYcE5x/RVN6YTZvVmhYTnFY/OGhCOUxHU05tUWxq/S2c5enc9",
    "https://imgs.search.brave.com/j9Ot0cEEXSphrY1ggaDSqKZ0NGTauSSq0jXCqDnc3Qg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFGQ2F0b1Rl/Y28vNi8wLzQwMHct/OVNCa2NRWjBzeVku/anBn",
    // "https://imgs.search.brave.com/6SC87COx6enBDCEIh504zWtywqwKTLMfVc0ibp6550c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNGZkZTE5/MjItYmZjNy00MGVi/LTk4NmItMjU3NjYz/NTEzNDkxL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4NTY4NTU0/NTM1MzAwMDAw",
    // "https://imgs.search.brave.com/njjYJNuUaF_l2AFxMYhQut-Uxb3WtWz0hlZGAFh27CY/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzQxMTVfMTZj/MzA0M2EwNWI4NzI0/MWViNWI0OWRiNTFl/YTdhMTkucG5n",
   ],
   [
    "https://imgs.search.brave.com/59-mp0gOOfeDw_3NaqO0YZp5BA6e40OsMCor2ELzl80/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzMzMjdfNzg4/M2EwZmZjNzkwNmYw/ZDUzNDdkN2ZhOGU0/MmM2ODkucG5n",
    "https://imgs.search.brave.com/RWUuAUJguNTzgG3rH-B5EboVhvIpmRjYbpCAVt1To2g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/Ny8xNS9tb2Rlcm4t/Z2xvYmUtaWNvbnMt/bG9nb3MtdmVjdG9y/LTM1ODQ3MTUuanBn",
    "https://imgs.search.brave.com/P5wyECqZ4k-GLwcCaYD4Jz8Uc5whwUvceBuqvKPtGiU/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzIyODlfNzcz/OTFkNTViYWNkMmJm/NTlmZDExMTdjM2M4/NDgzYWQucG5n",
    "https://imgs.search.brave.com/yH3HaWrlH7lZGc5_efr_8NGP_cLrLYI0RIc-iokVbNQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWducnVzaC5j/b20vdXBsb2Fkcy91/c2Vycy9jdXN0b21l/ci0yL2ltYWdlXzE1/MDU5MzMzODlfN2M4/MGU4MmQyMGEzNmY3/MjQ1Yjc5MjEyZDI5/NWMyYzQuanBlZw",
    "https://imgs.search.brave.com/frS4GaqoZusp_7XLt3I6aNXhYRpyWVE9ogDvkMH-_Wc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/MDI0Mzk4Mi92ZWN0/b3IvdmVjdG9yLWRl/c2lnbi1lbWJsZW0t/c2lnbi1mb3ItYnVz/aW5lc3MtYy1sZXR0/ZXItaWNvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WlJW/bUJkM2FfVVdlcjVh/MkMyNWc5a05Ya3pZ/YnJYTHBkdWpnMW9y/TElyWT0",
    "https://imgs.search.brave.com/Un6h6VP2pPrUx50G_TpxhVGdNL1KY5sXkju92gvFWMM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/NTk3MjgxNC92ZWN0/b3IvbW9kZXJuLWFu/ZC1jcmVhdGl2ZS1n/bG9iYWwtdGVjaG5v/bG9neS1sb2dvLXdp/dGgtYmx1ZS13YXZl/LWVsZW1lbnRzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1k/Z19fc2JxeWozdW13/WnRJUGtqTXhrOHRm/ZlpzTGw4ODJQeHIz/NUFJQ0JvPQ",
    "https://imgs.search.brave.com/WVpIS8nbSrLDubGdVpv4sj3q0NFWRI0ffCMNWmM00Ic/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9UV2lLWWdURk1i/U1ZTMHF0QTdEN0Z1/aUZBVFE9LzE3MHgx/MDM1OjY3MXgxNTM3/L2ZpdC1pbi81MDB4/NTAwL3Byb2plY3Rz/LWZpbGVzLzQwLzQw/MjcvNDAyNzEzL2Qx/ZDgyYWIwLWE3N2Ut/NDhmMy04OGEwLTQ2/ZjRhMzFmYjNhMi5w/bmc",
    "https://imgs.search.brave.com/nUj6QNusLXkkIRdCbQYXdijsNs9a8W9Ab8QIQ_rlYVQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvYWR2YW5jZV9s/b2dvcy82NzQucG5n",
    "https://imgs.search.brave.com/2_AjWTKl_VJOxhNfnhcs3JmsgJCvg_5694kUXGGMyTE/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzA5/L1dhdHNPblRlY2gt/TG9nby10aHVtYi5w/bmc",
    "https://imgs.search.brave.com/Wbx6E4M7LiEoKMCMLTEngz3WSxylQmkxCwozdKBzlzY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNmQwNDI2/NmQtNDQxYy00NjE3/LWFmN2YtMzg2Yjc2/ZjhmMDU4L2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4NTc0MTA1/NTcxNzcwMDAw",
    "https://imgs.search.brave.com/I3uzxztjRBqhFCiaEhvqS8FS-GrEB9DE8RxBX84-i5Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFGVW82Rmts/ckkvMi8wLzE2MDB3/LWxwcDNKQjlvcVlr/LmpwZw",
    "https://imgs.search.brave.com/_5Qy-Ek85llX6_HrdzmehpCYVaSU30TnysfwbkzpPBM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE0/ODg3MDU4Ni92ZWN0/b3IvYS1jcm9zcy1v/ci1wbHVzLWdyYWRp/ZW50LWxvZ28tZnJv/bS1hYnN0cmFjdC1j/b2xvcmZ1bC1zaGFw/ZXMtY3JlYXRpdmUt/cGhhcm1hY3ktY2xp/bmljLWZsYXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVW/dVhEZ2U3MXlYcE5x/RVN6YTZvVmhYTnFY/OGhCOUxHU05tUWxq/S2c5enc9",
    "https://imgs.search.brave.com/j9Ot0cEEXSphrY1ggaDSqKZ0NGTauSSq0jXCqDnc3Qg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFGQ2F0b1Rl/Y28vNi8wLzQwMHct/OVNCa2NRWjBzeVku/anBn",
   ]
  ];

  return (
    <div className='flex flex-col gap-5 p-2 mt-10'>
      {images.map((item, index) => (
        <Marquee imagesurl={item} key={index} />
      ))}
    </div>
  )
}

export default Marquees
