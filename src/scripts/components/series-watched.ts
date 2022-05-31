import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { seriesList } from '../series-list.js';
import { iSerie } from '../interfaces/iseries.js';

export class SeriesWatched extends Component implements iComponent {
    template: string;
    series: Array<iSerie>;
    constructor(public selector: string) {
        super();
        this.series = seriesList;
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        let htmlItems = '';
        let htmlStars = '';
        for (let i = 0; i < 5; i++) {
            htmlStars += `
                <li class="score__star">
                    <i class="icon--score fas fa-star" title="${i}/5"></i>
                </li>
            `;
        }

        this.series.forEach((item) => {
            if (item.watched === true) {
                htmlItems += `
                    <li class="serie">
                    <img
                        class="serie__poster"
                        src="${item.poster}"
                        alt="${item.name} poster"
                    />
                    <h4 class="serie__title">${item.name}</h4>
                    <p class="serie__info">${item.creator} (${item.year})</p>
                    <ul class="score">
                        ${htmlStars}
                    </ul>
                    <i class="fas fa-times-circle icon--delete"></i>
                </li>
                `;
            }
        });
        return `
        <section class="series-watched">
                 <h3 class="subsection-title">Watched series [[Watched-Series Component]]</h3>
                 <p class="info">You have watched 4 series</p-->
                 <!--<p class="info">You already have not watched any serie</p>-->
                 <ul class="series-list series-list--watched">
                    ${htmlItems}
                </ul>
        </section>
        `;
    }
}

//     constructor(public selector: string) {
//         super();
//         this.template = this.createTemplate();
//         this.outRender(this.selector);
//     }
//     createTemplate() {
//         return `
//             <section class="series-watched">
//                 <h3 class="subsection-title">Watched series [[Watched-Series Component]]</h3>
//                 <p class="info">You have watched 4 series</p-->
//                 <!--<p class="info">You already have not watched any serie</p>-->
//                 <ul class="series-list series-list--watched">
//                             <li class="serie">
//                                 <img
//                                     class="serie__poster"
//                                     src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
//                                     alt="The Sopranos poster"
//                                 />
//                                 <h4 class="serie__title">The Sopranos</h4>
//                                 <p class="serie__info">David Chase (1999)</p>
//                                 <ul class="score">
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="1/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="2/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="3/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="4/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="5/5"
//                                         ></i>
//                                     </li>
//                                 </ul>
//                                 <i class="fas fa-times-circle icon--delete"></i>
//                             </li>
//                             <li class="serie">
//                                 <img
//                                     class="serie__poster"
//                                     src="https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA=="
//                                     alt="Game of Thrones poster"
//                                 />
//                                 <h4 class="serie__title">Game of Thrones</h4>
//                                 <p class="serie__info">
//                                     David Benioff D. B. Weiss (2011)
//                                 </p>
//                                 <ul class="score">
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="1/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="2/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="3/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="4/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="5/5"
//                                         ></i>
//                                     </li>
//                                 </ul>
//                                 <i class="fas fa-times-circle icon--delete"></i>
//                             </li>
//                             <li class="serie">
//                                 <img
//                                     class="serie__poster"
//                                     src="https://pics.filmaffinity.com/Mad_Men_Serie_de_TV-351490728-large.jpg"
//                                     alt="Mad Men poster"
//                                 />
//                                 <h4 class="serie__title">Mad Men</h4>
//                                 <p class="serie__info">Matthew Weiner (2007)</p>
//                                 <ul class="score">
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="1/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="2/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="3/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="4/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="5/5"
//                                         ></i>
//                                     </li>
//                                 </ul>
//                                 <i class="fas fa-times-circle icon--delete"></i>
//                             </li>
//                             <li class="serie">
//                                 <img
//                                     class="serie__poster"
//                                     src="https://www.cine.com/media/series/2711.jpg"
//                                     alt="6 feet under poster"
//                                 />
//                                 <h4 class="serie__title">6 feet under</h4>
//                                 <p class="serie__info">Alan Ball (2001)</p>
//                                 <ul class="score">
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="1/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="2/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="3/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="4/5"
//                                         ></i>
//                                     </li>
//                                     <li class="score__star">
//                                         <i
//                                             class="icon-score far fa-star"
//                                             title="5/5"
//                                         ></i>
//                                     </li>
//                                 </ul>
//                                 <i class="fas fa-times-circle icon--delete"></i>
//                             </li>
//                         </ul>
//                     </section>
//         `;
//     }
// }
