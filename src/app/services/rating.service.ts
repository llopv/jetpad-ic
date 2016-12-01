import { Injectable, Inject } from "@angular/core";
import { DocumentService } from ".";

declare let SwellRT: any;
declare let Date: any;


@Injectable()
export class RatingService {


  RATING_TYPE_AGREE  = "agree";
  RATING_TYPE_DISAGREE  = "disagree";
  RATING_TYPE_QUESTION  = "question";

  NODE_SECTION_VERSIONS = "section_versions";
  NODE_SECTION_RATINGS = "section_ratings";

  constructor(private documentService: DocumentService) {
  }


  private getCurrentSectionVersion(sectionId : String) {

    // Get collaborative object
    let obj = this.documentService.document;

    // Initialize section version
    if (!obj.root.get(this.NODE_SECTION_VERSIONS)) {
        obj.root.put(this.NODE_SECTION_VERSIONS, obj.createMap());
    }

    // Get current section version
    if (!obj.root.get(this.NODE_SECTION_VERSIONS).get(sectionId)) {
      // now just a Date timestamp as version
      let timestamp = Date.now().toString();
      obj.root.get(this.NODE_SECTION_VERSIONS).put(sectionId, timestamp);
    }

    return obj.root.get(this.NODE_SECTION_VERSIONS).get(sectionId).getValue();

  }

  private getSectionRatingsMap(sectionId : String, version: String) {

    // Get collaborative object
    let obj = this.documentService.document;

    // Initialize rating map
    if (!obj.root.get(this.NODE_SECTION_RATINGS)) {
        obj.root.put(this.NODE_SECTION_RATINGS, obj.createMap());
    }

    let sectionRatingsMap = obj.root.get(this.NODE_SECTION_RATINGS);
    let sectionVersionId = sectionId+"_"+version;

    // Initialize versioned-section space
    if (!sectionRatingsMap.get(sectionVersionId)) {
      sectionRatingsMap.put(sectionVersionId, obj.createMap());
    }

    return sectionRatingsMap.get(sectionVersionId);

  }

  //
  // Add rating to a text section for the current logged in user
  // Return an unique id
  //
  addRating(section: string, sectionLevel: string, argumentType: string, argument: string, ratingType: string) {

    // Compose section id
    let sectionId = section+"_"+sectionLevel;
    let currentSectionVersion = this.getCurrentSectionVersion(sectionId);
    let ratingMap = this.getSectionRatingsMap(sectionId, currentSectionVersion);

    // Get collaborative object
    let obj = this.documentService.document;

    // Generate rating id - ugly way!
    let ratingId = sectionId+":"+currentSectionVersion+":"+Date.now().toString();

    // Create new rating object
    let rating = ratingMap.put(ratingId, obj.createMap());
    rating.put("rating_id", ratingId);
    rating.put("doc_version","");
    rating.put("doc_range_start", "");
    rating.put("doc_range_end", "");
    rating.put("argument_text",argument);
    rating.put("argument_type",argumentType);
    rating.put("rating_type",ratingType);
    rating.put("endorsement_count","1");
    rating.put("date", Date.now().toString());


    return ratingId;
  }


  updateRating(section: String, sectionLevel: String, ratingId: String) {

    // Compose section id
    let sectionId = section+"_"+sectionLevel;
    let currentSectionVersion = this.getCurrentSectionVersion(sectionId);
    let ratingMap = this.getSectionRatingsMap(sectionId, currentSectionVersion);

    let rating = ratingMap.get(ratingId);

    if (!rating)
      return; // Ops, that shouldn't happen

    let endorsementCount = rating.get("endorsement_count").getValue();
    endorsementCount = (parseInt(endorsementCount) + 1).toString();
    rating.get("endorsement_count").setValue(endorsementCount);

  }

  //
  // Get a list of ratings for a text section filtering by type
  //
  getRatings(section: String, sectionLevel: String) {

    let sectionId = section+"_"+sectionLevel;
    let currentSectionVersion = this.getCurrentSectionVersion(sectionId);
    let ratingMap = this.getSectionRatingsMap(sectionId, currentSectionVersion);

    let ratingKeys = ratingMap.keySet();

    let ratings = {
      agree : [],
      disagree: [],
      question: []
    };

    for (var k in ratingKeys) {

      let rating = ratingMap.get(k);
      let ratingObject = {

        rating_id: rating.get("rating_id").getValue(),
        argument_text: rating.get("argument_text").getValue(),
        argument_type: rating.get("argument_type").getValue(),
        rating_type: rating.get("rating_type").getValue(),
        endorsement_count: rating.get("endorsement_count").getValue(),
        date : rating.get("date").getValue()

      };

      if (ratingObject.rating_type == this.RATING_TYPE_AGREE) {
        ratings.agree.push(ratingObject);
      } else if (ratingObject.rating_type == this.RATING_TYPE_DISAGREE) {
        ratings.disagree.push(ratingObject);
      } else if (ratingObject.rating_type == this.RATING_TYPE_QUESTION) {
        ratings.question.push(ratingObject);
      }

    }

    return ratings;
  }

}
