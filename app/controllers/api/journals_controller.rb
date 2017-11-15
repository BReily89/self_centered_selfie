class Api::JournalsController < ApplicationController
    def index
        @journals = Journal.all
        render json: @journals, include: 'posts'
    end
    def create
        journal_params = params.require(:journal).permit(:name, :description)
            @journal = Journal.new(journal_params)
            if @journal.save
                render json: @journal
            end
        end
    def show
        journal_id = params[:id]
        @journal = Journal.find_by_id(journal_id)
        render json: @journal
    end
    def update 
        journal_id = params[:id]
        @journal = Journal.find_by_id(journal_id)
        journal_params = params.require(:journal).permit(:name, :description)
        @journal.update_attributes(journal_params)
        render json: @journal
    end
def destroy
    journal_id = params[:id]
    @journal = Journal.find_by_id(journal_id)
    @journal.destroy
    render json: {
        msg: "deleted"
    }
    end
end
