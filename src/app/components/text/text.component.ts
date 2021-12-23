import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() name: string;

  constructor() { 
    this.name = "";
  }

  ngOnInit(): void {
  }
}
/*
                                     :e
                                    'M$\
                                   sf$$br
                                 J\J\J$L$L
                               :d  )fM$$$$$r
                          ..P*\ .4MJP   '*\
                 sed"""""" ser d$$$F
             .M\  ..JM$$$B$$$$BJ$MR  ...
            dF  nMMM$$$R$$$$$$$h"$ks$$"$$r
          J\.. .MMM8$$$$$LM$P\..'**\    *\
         d :d$r "M$$$$br'$M\d$R
        J\MM\ *L   *M$B8MM$B.**
       :fd$>  :fhr 'MRM$$M$$"
       MJ$>    '5J5..M8$$>
      :fMM     d$Fd$$R$$F
      4M$P .$$*.J*$$**
      M4$> '$>dRdF
      MMM\   *L*B.
     :$$F     ?k"Re
   .$$P\        **'$$B...
:e$F"               '""""
*/